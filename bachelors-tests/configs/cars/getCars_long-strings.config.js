const mpgHelper = (faker) => {
  return faker.datatype.number({ min: 5, max: 30, precision: 0.1 });
};
const cylindersHelper = (faker) => {
  return faker.datatype.number({ min: 4, max: 12, precision: 2 });
};
const yearHelper = (faker) => {
  return faker.datatype.number({ min: 1950, max: 2023 });
};
const priceHelper = (faker) => {
  return faker.datatype.number({
    min: 1000,
    max: 200000,
    precision: 10,
  });
};
const displacementHelper = (faker) =>
  faker.datatype.number({ min: 2, max: 8, precision: 0.1 });

const transmissionHelper = (faker) => faker.helpers.arrayElement(["a", "m"]);
const pageHelper = (faker) => faker.datatype.number({ min: 1, max: 1 });

export const getCarsResponseSchema = {
  meta: {
    mcsName: "cars",
    schemaName: "getCars",
    httpMethod: "get",
    url: "http://localhost:3030/cars/get-cars",
  },
  schema: {
    cars: {
      type: "array",
      itemsCount: 10,
      items: {
        type: "object",
        properties: {
          image: { type: "string", cb: (faker) => faker.lorem.words(10) },
          city_mpg: { type: "integer", cb: mpgHelper },
          class: { type: "string", cb: (faker) => faker.lorem.words(10) },
          combination_mpg: { type: "integer", cb: mpgHelper },
          cylinders: { type: "integer", cb: cylindersHelper, required: false },
          displacement: {
            type: "string",
            cb: displacementHelper,
            required: false,
          },
          drive: { type: "string", cb: (faker) => faker.lorem.words(10) },
          fuel_type: { type: "string", cb: (faker) => faker.lorem.words(10) },
          highway_mpg: { type: "integer", cb: mpgHelper },
          make: { type: "string", cb: (faker) => faker.lorem.words(10) },
          model: { type: "string", cb: (faker) => faker.lorem.words(10) },
          transmission: {
            type: "string",
            cb: transmissionHelper,
            required: false,
          },
          year: { type: "integer", cb: yearHelper },
          price: { type: "integer", cb: priceHelper },
        },
      },
    },
    page: { type: "integer", cb: pageHelper },
  },
};
