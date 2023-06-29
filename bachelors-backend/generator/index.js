const fs = require("fs/promises");
const path = require("path");

const IGNORED = ["node_modules", ".idea", ".git"];
async function* getRecursivePaths(pathname) {
  if (IGNORED.some((i) => pathname.includes(i))) {
    return;
  }

  const paths = await fs.readdir(pathname, { withFileTypes: true });

  for (const _path of paths) {
    if (_path.isDirectory()) {
      yield* getRecursivePaths(path.resolve(pathname, _path.name));
    }

    yield path.resolve(pathname, _path.name);
  }
}

async function getPaths() {
  const result = [];

  for await (const f of getRecursivePaths(process.cwd())) {
    result.push(f);
  }

  return result.filter((r) => r.includes("schema"));
}
const readFile = async () => {
  const paths = await getPaths();

  console.log(paths);
};

module.exports = { getPaths, readFile };
