export const getCars = {
  url: /http:\/\/localhost:3030\/cars\/get-cars/,
  response: {
    get: {
      json: {
        cars: [
          {
            id: "qbmce0zo3qhpihoqmf6sy",
            image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxOHx8Y2Fyc3xlbnwwfHx8fDE2ODM5NzczNjh8MA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 23.5,
            class: "Convertible",
            combination_mpg: 23.4,
            cylinders: 10,
            displacement: 6.1,
            drive: "2wd",
            fuel_type: "diesel",
            highway_mpg: 8.7,
            make: "Ferrari",
            model: "1",
            transmission: "a",
            year: 1958,
            price: 184220
          },
          {
            id: "mlnydn93v1o8tgruuiebk",
            image: "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxMHx8YXVkaXxlbnwwfHx8fDE2ODM5NzgyODl8MA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 6.3,
            class: "Minivan",
            combination_mpg: 11.4,
            cylinders: 10,
            displacement: 2.4,
            drive: "2wd",
            fuel_type: "diesel",
            highway_mpg: 13.4,
            make: "Bugatti",
            model: "Camaro",
            year: 2020,
            price: 74940
          },
          {
            id: "j1bl4ic2gibpw8v47yc0s",
            image: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxNHx8bWVyY2VkZXN8ZW58MHx8fHwxNjgzOTc4MzkyfDA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 24.9,
            class: "SUV",
            combination_mpg: 20,
            displacement: 3.4,
            drive: "4wd",
            fuel_type: "diesel",
            highway_mpg: 29,
            make: "Porsche",
            model: "Fortwo",
            year: 2020,
            price: 53800
          },
          {
            id: "swrzl2qtm1n3wrehpchrx",
            image: "https://images.unsplash.com/photo-1605556816125-d752c226247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxOXx8bWVyY2VkZXN8ZW58MHx8fHwxNjgzOTc4MzkyfDA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 7,
            class: "Passenger Van",
            combination_mpg: 20.2,
            cylinders: 12,
            displacement: 4.6,
            drive: "2wd",
            fuel_type: "electricity",
            highway_mpg: 26.5,
            make: "Honda",
            model: "V90",
            transmission: "a",
            year: 2017,
            price: 189100
          },
          {
            id: "g08sox0v76yzn94rhe9st",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwyMHx8YXVkaXxlbnwwfHx8fDE2ODM5NzgyODl8MA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 26.7,
            class: "Sedan",
            combination_mpg: 23.7,
            drive: "4wd",
            fuel_type: "electricity",
            highway_mpg: 19.9,
            make: "Jaguar",
            model: "A4",
            year: 1981,
            price: 157890
          },
          {
            id: "hs8ln1zdy5apwfrgcusrh",
            image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxNXx8Y2Fyc3xlbnwwfHx8fDE2ODM5NzczNjh8MA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 17.7,
            class: "Cargo Van",
            combination_mpg: 22.6,
            drive: "4wd",
            fuel_type: "gas",
            highway_mpg: 6.6,
            make: "Smart",
            model: "Colorado",
            transmission: "m",
            year: 1967,
            price: 158200
          },
          {
            id: "kezldsc15p2zxzyqeaf8y",
            image: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxNHx8bWVyY2VkZXN8ZW58MHx8fHwxNjgzOTc4MzkyfDA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 14.9,
            class: "Convertible",
            combination_mpg: 29,
            cylinders: 10,
            displacement: 2.7,
            drive: "2wd",
            fuel_type: "gas",
            highway_mpg: 11.9,
            make: "Hyundai",
            model: "Ranchero",
            year: 2001,
            price: 35820
          },
          {
            id: "7adzs8c37hn5p3r6mhwfv",
            image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHw4fHxjYXJzfGVufDB8fHx8MTY4Mzk3NzM2OHww&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 24,
            class: "Extended Cab Pickup",
            combination_mpg: 21.4,
            drive: "4wd",
            fuel_type: "gas",
            highway_mpg: 29.1,
            make: "Bugatti",
            model: "Ranchero",
            year: 2019,
            price: 46160
          },
          {
            id: "ei8wufi7k7287njsbyg71",
            image: "https://images.unsplash.com/photo-1576803636200-489c0e6b8147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHw1fHx0b3lvdGF8ZW58MHx8fHwxNjgzOTc4NDMwfDA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 7.9,
            class: "Passenger Van",
            combination_mpg: 26.8,
            drive: "4wd",
            fuel_type: "gas",
            highway_mpg: 14.7,
            make: "Polestar",
            model: "Altima",
            transmission: "m",
            year: 2021,
            price: 109890
          },
          {
            id: "kbwm86sux03vfhedfr0kn",
            image: "https://images.unsplash.com/photo-1605556816125-d752c226247b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDgwMDF8MHwxfHNlYXJjaHwxOXx8bWVyY2VkZXN8ZW58MHx8fHwxNjgzOTc4MzkyfDA&ixlib=rb-4.0.3&q=80&w=400",
            city_mpg: 17.1,
            class: "Wagon",
            combination_mpg: 16.4,
            drive: "2wd",
            fuel_type: "gas",
            highway_mpg: 11.9,
            make: "Audi",
            model: "Model 3",
            transmission: "m",
            year: 1968,
            price: 88530
          }
        ],
        page: 1
      }
    }
  }
};