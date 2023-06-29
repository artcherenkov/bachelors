const fs = require("fs/promises");

const getRawJs = async (pathname) => {
  let rawJs = await fs.readFile(pathname, { encoding: "utf-8" });
  return rawJs.replace("export const", "var");
};

const getRawJsStrings = async (paths) => {
  const result = {};
  let i = 0;
  for (let pathname of paths) {
    result[i] = await getRawJs(pathname);
    i++;
  }

  return result;
};

module.exports = { getRawJsStrings, getRawJs };
