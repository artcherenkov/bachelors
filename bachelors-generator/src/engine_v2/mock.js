const { executeRawJs } = require("./executeRawJs");
const { getMockData } = require("./getMockData");

const mock = async (rawJs) => {
  const { schema, meta } = executeRawJs(rawJs);

  return { mocks: getMockData(schema), meta };
};

module.exports = { mock };
