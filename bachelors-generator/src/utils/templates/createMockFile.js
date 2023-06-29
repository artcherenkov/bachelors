const fs = require("fs/promises");
const path = require("path");

const { renderMockDataTemplate } = require("./renderMockDataTemplate");
const { getPlaywrightDir } = require("../paths/getPlaywrightDir");
const { createPathIfNotExists } = require("../paths/createPathIfNotExists");

const createMockFile = async ({
  mcsName,
  schemaName,
  url,
  httpMethod,
  mocks,
  extension = "js",
  outputPath,
  outputFileName,
}) => {
  const outputPathname = outputPath || getPlaywrightDir();
  const filePath = path.join(outputPathname, mcsName);
  const fileName = `${outputFileName || schemaName}.${extension}`;
  createPathIfNotExists(path.join(filePath));

  const mocksWithMeta = {
    url: new RegExp(url),
    response: { [httpMethod]: { json: mocks } },
  };

  await fs.writeFile(
    path.join(filePath, fileName),
    renderMockDataTemplate({ schemaName, mocks: mocksWithMeta })
  );
};

module.exports = { createMockFile };
