const idHelper = (faker) => faker.datatype.uuid();
const firstNameHelper = (faker) => faker.name.firstName();
const lastNameHelper = (faker) => faker.name.lastName();
const birthDateHelper = (faker) =>
  new Date(
    faker.date.between("1970-01-01T00:00:00.000Z", "2030-01-01T00:00:00.000Z")
  )
    .toISOString()
    .slice(0, 10);
const phoneNumberHelper = (faker) => faker.phone.number("+7 ### ### ## ##");
const countryHelper = (faker) => faker.address.country();
const cityHelper = (faker) => faker.address.city();
const streetHelper = (faker) => faker.address.street();
const geoHelper = (faker) => {
  const point = faker.address.nearbyGPSCoordinate();
  return `${point[0]}, ${point[1]}`;
};
const creditCardNumberHelper = (faker) =>
  faker.finance.creditCardNumber("################");
const creditCardCVVHelper = (faker) => faker.finance.creditCardCVV();
const creditCardIssuerHelper = (faker) =>
  faker.helpers.arrayElement(["citybank", "mastercard", "visa", "mir"]);
const productNameHelper = (faker) => faker.commerce.product();
const productDecrHelper = (faker) => faker.commerce.productDescription();
const productPriceHelper = (faker) => faker.commerce.price(100, 2000, 0, "$");
const productDateHelper = (faker) => new Date(faker.date.past()).toISOString();

var schema = {
  meta: {
    mcsName: "testMcs",
    schemaName: "testSchema",
    httpMethod: "get",
    url: "http://localhost:3030/testMcs/testSchema",
  },
  schema: {
    users: {
      type: "array",
      itemsCount: 50,
      items: {
        type: "object",
        properties: {
          id: { type: "string", cb: idHelper },
          firstName: { type: "string", cb: firstNameHelper },
          lastName: { type: "string", cb: lastNameHelper },
          birthDate: { type: "string", cb: birthDateHelper },
          phoneNumber: { type: "string", cb: phoneNumberHelper },
          address: {
            type: "object",
            properties: {
              country: { type: "string", cb: countryHelper },
              city: { type: "string", cb: cityHelper },
              streetName: { type: "string", cb: streetHelper },
              geo: { type: "string", cb: geoHelper },
            },
          },
          creditCard: {
            type: "object",
            properties: {
              number: { type: "string", cb: creditCardNumberHelper },
              cvv: { type: "string", cb: creditCardCVVHelper },
              issuer: { type: "string", cb: creditCardIssuerHelper },
            },
          },
          lastBoughtProducts: {
            type: "array",
            itemsCount: 5,
            items: {
              type: "object",
              properties: {
                id: { type: "string", cb: idHelper },
                product: { type: "string", cb: productNameHelper },
                description: { type: "string", cb: productDecrHelper },
                price: { type: "string", cb: productPriceHelper },
                date: { type: "string", cb: productDateHelper },
              },
            },
          },
        },
      },
    },
  },
};
