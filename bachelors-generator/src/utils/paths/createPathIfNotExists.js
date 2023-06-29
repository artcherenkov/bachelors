const fs = require("fs");

const createPathIfNotExists = (pathToCheck) => {
  if (!fs.existsSync(pathToCheck)) {
    fs.mkdirSync(pathToCheck, { recursive: true });
  }
};

module.exports = { createPathIfNotExists };
