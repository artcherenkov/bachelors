#! /usr/bin/env node
const path = require("path");
const axios = require("axios");
const yargs = require("yargs");
const fs = require("fs/promises");

const { getPlaywrightDir } = require("../src/utils/paths/getPlaywrightDir");
const { startGeneration, generateMockFile } = require("../src/engine_v2");
const { executeRawJs } = require("../src/engine_v2/executeRawJs");
const {
  createPathIfNotExists,
} = require("../src/utils/paths/createPathIfNotExists");
const { getRawJs } = require("../src/utils/getRawJsStrings");

const getMeta = (rawJs) => {
  const { meta } = executeRawJs(rawJs);

  return meta;
};

yargs.command({
  command: "generate",
  describe:
    "Генерирует тестовые данные на основе конфигов, хранящихся на бэкенде.\n" +
    "Пример: tdg generate --url http://localhost:3000",
  builder: {
    url: {
      describe: "Адрес сервера, на котором хранятся конфиги.",
      demandOption: true,
      type: "string",
    },
  },
  handler: async function (argv) {
    const { url } = argv;
    console.log("Начинаю генерацию данных");

    try {
      console.log(`Запрашиваю ${url}/schemas`);
      const { data } = await axios.get(`${url}/schemas`);

      console.log("Начинаю обработку данных");
      await startGeneration(data);

      console.log(
        `Моки успешно сгенерированы. Они находятся в папке ${getPlaywrightDir()}`
      );
    } catch (err) {
      console.log(
        "Произошла ошибка при получении данных. Проверьте url запроса" + err
      );
    }
  },
});
yargs.command({
  command: "generate-local",
  describe:
    "Генерирует тестовые данные на основе конфигурационного файла, хранящегося локально.\n" +
    "Пример: tdg generate-local --inputPath ./configs/config.schema.js --outputPath ./mocks",

  builder: {
    inputPath: {
      describe: "Путь к локальному конфигу.",
      demandOption: true,
      type: "string",
      coerce: (value) => path.join(process.cwd(), value),
    },
    outputPath: {
      describe:
        "Путь к директории, в которую следует поместить сгенерированные моковые данные.",
      demandOption: true,
      type: "string",
      coerce: (value) => path.join(process.cwd(), value),
    },
  },
  handler: async function (argv) {
    const { inputPath, outputPath } = argv;

    const outputFilename = inputPath.split(path.sep).slice(-1)[0].replace("schema", "mock").slice(0, -3);

    try {
      const data = await getRawJs(inputPath);
      await generateMockFile(data, outputPath, outputFilename);
    } catch (err) {
      console.log(err);
    }
  },
});
yargs.command({
  command: "get-configs",
  describe:
    "Запрашивает конфигурационные файлы с бэкенда и помещает их в локальную папку.\n" +
    "Пример: tdg get-configs --url http://localhost:3000 --outputPath /configs",
  builder: {
    url: {
      describe: "Адрес сервера, на котором хранятся конфиги.",
      demandOption: true,
      type: "string",
    },
    outputPath: {
      describe: "Путь к директории, в которую следует поместить конфиги.",
      demandOption: true,
      type: "string",
      coerce: (value) => path.join(process.cwd(), value),
    },
  },
  handler: async function (argv) {
    const { url, outputPath } = argv;
    console.log(`Backend url ${url}, local path ${outputPath}`);

    console.log(`Запрашиваю ${url}/schemas`);
    const { data } = await axios.get(`${url}/schemas`);

    await (async function () {
      for (key of Object.keys(data)) {
        const meta = getMeta(data[key]);
        createPathIfNotExists(path.join(outputPath, meta.mcsName));

        await fs.writeFile(
          path.join(outputPath, meta.mcsName, meta.schemaName + ".config.js"),
          data[key].replace("var", "export const")
        );
      }
    })();
  },
});

// Parse the command-line arguments
yargs.parse();
