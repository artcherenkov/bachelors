export const getCars = {
  url: /http:\/\/localhost:3030\/cars\/get-cars/,
  response: {
    get: {
      json: {
        cars: [
          {
            image: "https://images.unsplash.com/photo-1519335897396-bd5f8307d996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwyNnx8dG95b3RhfGVufDB8fHx8MTY4Mzk3ODQzMXww&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 7.3,
            class: "Coupe",
            combination_mpg: 26.2,
            cylinders: 4,
            drive: "4wd",
            fuel_type: "gas",
            highway_mpg: 28,
            make: "Dodge",
            model: "Camaro",
            year: 2007,
            price: 175550
          },
          {
            image: "https://images.unsplash.com/photo-1631193961927-f7f85ed52093?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxOXx8aHl1bmRhaXxlbnwwfHx8fDE2ODM5NzgzNTV8MA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 14.9,
            class: "Hatchback",
            combination_mpg: 21.2,
            cylinders: 4,
            drive: "4wd",
            fuel_type: "electricity",
            highway_mpg: 25.1,
            make: "Volkswagen",
            model: "Explorer",
            year: 1987,
            price: 180260
          }
        ],
        page: 1
      }
    }
  }
};