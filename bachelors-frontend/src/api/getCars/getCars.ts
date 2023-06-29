export type TResponse = {
  id: string;
  image: string;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type TCarInfo = {
  id: string;
  image: string;
  cityLp100km: number;
  class: string;
  combinationLp100km: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuelType: string;
  highwayLp100km: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

type TMappedCarInfo = TCarInfo &
  Partial<
    Pick<
      TResponse,
      "city_mpg" | "combination_mpg" | "highway_mpg" | "fuel_type"
    >
  >;

export const mapper = (response: TResponse[]): TCarInfo[] => {
  return response.map<TCarInfo>((r) => {
    const carInfo: TMappedCarInfo = {
      ...r,
      cityLp100km: r.city_mpg,
      combinationLp100km: r.combination_mpg,
      highwayLp100km: r.highway_mpg,
      fuelType: r.fuel_type,
    };

    delete carInfo.city_mpg;
    delete carInfo.combination_mpg;
    delete carInfo.highway_mpg;
    delete carInfo.fuel_type;

    return carInfo;
  });
};

export const fetchCars = async (page: number = 1) => {
  const res = await fetch(`http://localhost:3030/cars/get-cars?page=${page}`);

  return await res.json();
};
