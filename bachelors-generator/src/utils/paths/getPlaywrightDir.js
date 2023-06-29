const path = require("path");

function getPlaywrightDir() {
  let currentDir = process.cwd();

  return path.join(currentDir, "playwright", "mocks");
}

module.exports = { getPlaywrightDir };
