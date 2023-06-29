const path = require("path");

const getOutputPath = (outputDir, filename) => {
  return path.join(process.cwd(), outputDir, filename + ".js");
};

module.exports = getOutputPath;
