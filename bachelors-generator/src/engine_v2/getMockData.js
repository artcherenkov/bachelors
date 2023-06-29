const { generateData } = require("./generateData");
const getMockData = (schema) => {
  const generatedData = {};
  for (let key in schema) {
    if (schema.hasOwnProperty(key)) {
      generatedData[key] = generateData(schema[key]);
    }
  }

  return generatedData;
};

module.exports = { getMockData };
