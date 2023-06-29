const { createMockFile } = require("../utils/templates/createMockFile");
const { createConfigFile } = require("../utils/templates/createConfigFile");
const { mock } = require("./mock");

const startGeneration = async (schemas, shouldCreateConfig = true) => {
  const metas = [];

  for (let key in Object.keys(schemas)) {
    const { mocks, meta } = await mock(schemas[key]);
    metas.push({ ...meta });

    await createMockFile({ ...meta, mocks });
  }

  if (shouldCreateConfig) {
    await createConfigFile(metas);
  }
};

const generateMockFile = async (schema, outputPath, outputFileName) => {
  const { mocks, meta } = await mock(schema);
  await createMockFile({
    ...meta,
    mocks,
    outputFileName,
    outputPath,
  });
};

module.exports = { startGeneration, generateMockFile };
