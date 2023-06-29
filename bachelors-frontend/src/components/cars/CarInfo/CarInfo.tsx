import { TCarInfo } from "../../../api/getCars";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const CarInfo = (props: TCarInfo) => {
  return (
    <Card data-testid="info">
      <div
        style={{
          height: 280,
          background: `url(${props.image}) no-repeat center`,
          backgroundSize: "cover",
        }}
      />
      <CardContent>
        <Typography sx={{ fontSize: 12 }}>Company: {props.make}</Typography>
        <Typography sx={{ fontSize: 14 }}>Model: {props.model}</Typography>
        <Typography sx={{ fontSize: 12 }}>Year: {props.year}</Typography>
        <Typography sx={{ fontSize: 12 }}>
          Cylinders: {props.cylinders}
        </Typography>
      </CardContent>
    </Card>
  );
};
