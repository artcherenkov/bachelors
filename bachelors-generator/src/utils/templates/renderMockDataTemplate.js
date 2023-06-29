const { objectToString } = require("../objectToString");

const renderMockDataTemplate = ({ schemaName, mocks }) => {
  const jsonMocks = objectToString(mocks);
  return `export const ${schemaName} = ${jsonMocks};`;
};

module.exports = { renderMockDataTemplate };
