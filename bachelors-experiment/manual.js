/*
{
  "id": "string",
  "firstName": "string",
  "lastName": "string",
  "birthDate": "string",
  "phoneNumber": "string",
  "address": {
    "country": "string",
    "city": "string",
    "streetName": "string",
    "geo": {
      "lat": "number",
      "lng": "number"
    }
  },
  "creditCard": {
    "number": "string",
    "cvv": "string",
    "issuer": ["citybank", "mastercard", "visa", "mir"]
  },
  "lastBoughtProducts": [
    {
      "id": "string",
      "product": "string",
      "description": "string",
      "price": "string",
      "date": "string"
    }
  ]
}
 */

const mocks = {
  users: [
    {
      id: "ebeiurfhj",
      firstName: "Wade",
      lastName: "Smith",
      birthDate: "1974-04-24",
      phoneNumber: "+7 912 234 23 34",
      address: {
        country: "Russia",
        city: "Moscow",
        streetName: "Aalto Place",
        geo: "47.871860938617615, 67.44820969016038",
      },
      creditCard: {
        number: "4539658457537964",
        cvv: "342",
        issuer: "citybank",
      },
      lastBoughtProducts: [
        {
          id: "245234",
          product: "Towel",
          description: "A very delightful towel",
          price: "$233",
          date: "2023-07-29T02:25:31.672Z",
        },
        {
          id: "245234",
          product: "Meat",
          description: "Delicious food",
          price: "$38",
          date: "2023-10-24T02:25:31.672Z",
        },
        {
          id: "245234",
          product: "Meat",
          description: "Delicious food",
          price: "$38",
          date: "2023-10-24T02:25:31.672Z",
        },
      ],
    },
    {
      id: "eruifghejkfg",
      firstName: "Dave",
      lastName: "Jones",
      birthDate: "1990-12-28",
      phoneNumber: "+7 943 645 25 72",
      address: {
        country: "Malta",
        city: "Laruecester",
        streetName: "Bacon Terrace",
        geo: "61.23159903936712, 10.098276991780224",
      },
      creditCard: {
        number: "5459868981920627",
        cvv: "635",
        issuer: "mastercard",
      },
      lastBoughtProducts: [
        {
          id: "245234",
          product: "Meat",
          description: "Delicious food",
          price: "$38",
          date: "2023-10-24T02:25:31.672Z",
        },
        {
          id: "245234",
          product: "Meat",
          description: "Delicious food",
          price: "$38",
          date: "2023-10-24T02:25:31.672Z",
        },
        {
          id: "245234",
          product: "Meat",
          description: "Delicious food",
          price: "$38",
          date: "2023-10-24T02:25:31.672Z",
        },
      ],
    },
    {
      id: "ekrjbrkf",
      firstName: "Seth",
      lastName: "Taylor",
      birthDate: "1977-07-29",
      phoneNumber: "+7 982 527 52 97",
      address: {
        country: "Greece",
        city: "Tokyo",
        streetName: "Bloomington Place",
        geo: "65.47985125767096, -17.415652544649113",
      },
      creditCard: {
        number: "5384417341162247",
        cvv: "854",
        issuer: "mir",
      },
      lastBoughtProducts: [
        {
          id: "245234",
          product: "Towel",
          description: "A very delightful towel",
          price: "$233",
          date: "2023-07-29T02:25:31.672Z",
        },
      ],
    },
    {
      id: "eriufgheif",
      firstName: "Ivan",
      lastName: "Davies",
      birthDate: "1995-10-15",
      phoneNumber: "+7 952 292 32 85",
      address: {
        country: "France",
        city: "Delhi",
        streetName: "Bramble Terrace",
        geo: "66.7702454532011, 20.110084235494398",
      },
      creditCard: {
        number: "6011760552760335",
        cvv: "135",
        issuer: "visa",
      },
      lastBoughtProducts: [
        {
          id: "245234",
          product: "Towel",
          description: "A very delightful towel",
          price: "$233",
          date: "2023-07-29T02:25:31.672Z",
        },
      ],
    },
    {
      id: "erkjbfeikjhfn",
      firstName: "Gilbert",
      lastName: "Walton",
      birthDate: "2000-09-22",
      phoneNumber: "+7 912 924 68 24",
      address: {
        country: "Spain",
        city: "Shanghai",
        streetName: "Laveigne Road",
        geo: "56.68880535299004, -102.03397148410885",
      },
      creditCard: {
        number: "341902207139838",
        cvv: "784",
        issuer: "mastercard",
      },
      lastBoughtProducts: [
        {
          id: "245234",
          product: "Towel",
          description: "A very delightful towel",
          price: "$233",
          date: "2023-07-29T02:25:31.672Z",
        },
        {
          id: "245234",
          product: "Towel",
          description: "A very delightful towel",
          price: "$233",
          date: "2023-07-29T02:25:31.672Z",
        },
      ],
    },
  ],
};
