const path = require("path");
const fs = require("fs/promises");

const { getPlaywrightDir } = require("../paths/getPlaywrightDir");
const { renderConfigTemplate } = require("./renderConfigTemplate");

const createConfigFile = async (schemas) => {
  const filePath = path.join(getPlaywrightDir(), "index.ts");
  await fs.writeFile(filePath, renderConfigTemplate(schemas));
};

module.exports = { createConfigFile };
