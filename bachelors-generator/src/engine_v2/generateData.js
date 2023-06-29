const { faker } = require("@faker-js/faker");

const generateData = (schema) => {
  if (schema.type === "array") {
    const itemsCount = schema.itemsCount || 1;
    const itemsSchema = schema.items;
    const data = [];
    for (let i = 0; i < itemsCount; i++) {
      const itemData = generateData(itemsSchema);
      data.push(itemData);
    }
    return schema.required !== false || Math.random() > 0.5 ? data : undefined;
  } else if (schema.type === "object") {
    const properties = schema.properties;
    const data = {};
    for (let prop in properties) {
      if (properties.hasOwnProperty(prop)) {
        const propSchema = properties[prop];
        if (propSchema.required !== false || Math.random() > 0.5) {
          data[prop] = generateData(propSchema);
        }
      }
    }
    return data;
  } else if (schema.type === "tuple") {
    const items = schema.items;
    const data = [];
    for (let prop in items) {
      if (items.hasOwnProperty(prop)) {
        const itemSchema = items[prop];
        if (itemSchema.required !== false || Math.random() > 0.5) {
          const itemData = generateData(itemSchema);
          data.push(itemData);
        }
      }
    }
    return data;
  } else {
    if (schema.type === "string") {
      if (schema.cb) {
        return schema.cb(faker);
      }
      return schema.required !== false || Math.random() > 0.5
        ? faker.lorem.word()
        : undefined;
    } else if (schema.type === "integer") {
      if (schema.cb) {
        return schema.cb(faker);
      }
      return schema.required !== false || Math.random() > 0.5
        ? faker.datatype.number()
        : undefined;
    }
  }
};

module.exports = { generateData };
