const vm = require("vm");

const executeRawJs = (rawJs) => {
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(rawJs, sandbox);

  const firstAvailableKey = Object.keys(sandbox)[0];
  return sandbox[firstAvailableKey];
};

module.exports = { executeRawJs };
