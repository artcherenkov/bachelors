import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";

import { fetchCars, mapper, TCarInfo } from "../../../api/getCars";
import { CarInfo } from "../CarInfo";
import styles from "./CarsContainer.module.css";

interface ICustomLoadingButton {
  loading: boolean;
  children: React.ReactNode;

  onClick(): void;
}

const CustomLoadingButton = (props: ICustomLoadingButton) => {
  return (
    <LoadingButton
      sx={{ mt: 1 }}
      onClick={props.onClick}
      variant="contained"
      loading={props.loading}
    >
      Загрузить еще
    </LoadingButton>
  );
};

interface IContainerProps {
  children: React.ReactNode;
}

const Container = (props: IContainerProps) => {
  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {props.children}
    </Box>
  );
};

export const CarsContainer = () => {
  const [cars, setCars] = useState<TCarInfo[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setLoading(true);

      const { cars } = await fetchCars();
      const mappedCars = mapper(cars);
      setCars(mappedCars);

      setLoading(false);
    })();
  }, []);

  const onMoreClick = async () => {
    setLoading(true);

    const { cars } = await fetchCars(page + 1);
    const mappedCars = mapper(cars);
    setCars((prev) => [...prev, ...mappedCars]);
    setPage(page + 1);

    setLoading(false);
  };

  return (
    <Box>
      <div className={styles.grid}>
        {cars.map((c, idx) => (
          <CarInfo key={idx} {...c} />
        ))}
      </div>

      {cars.length >= 9 && (
        <Container>
          <CustomLoadingButton onClick={onMoreClick} loading={loading}>
            Загрузить ещё
          </CustomLoadingButton>
        </Container>
      )}
    </Box>
  );
};
