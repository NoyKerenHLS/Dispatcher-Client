import { Stack } from "@mui/material";
import { FC } from "react";
import { APP_BAR_HEIGHT } from "../navBar/styles";
import TopHeadLines from "../pages/TopHeadLienes";

interface IProps {}

const MainPage: FC<IProps> = () => {
  return (
    <Stack
      gap="20px"
      alignItems="center"
      sx={{
        mt: APP_BAR_HEIGHT,
        pt: { xs: "0px", md: "20px" },
        px: { md: "240px" },
      }}
    >
      <TopHeadLines />
    </Stack>
  );
};

export default MainPage;
