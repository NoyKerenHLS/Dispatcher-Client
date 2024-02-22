import { Box, Stack } from "@mui/material";
import React, { FC } from "react";
import NavBar from "../navBar/NavBar";
import {
  articlesData,
  dropDownsData,
  handleSearch,
} from "../../utils/MockUpData";
import FilterLayout from "../filtersLayout/FilterLayout";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";
import useMediaQuery from "@mui/material";
import { useTheme } from "@emotion/react";

interface IProps {}

const MainPage: FC<IProps> = (props) => {
  return (
    <Stack gap={"20px"} alignItems={"center"}>
      <NavBar dropDownLabel={"Top Headlines"} handleSearch={handleSearch} />
      <Stack
        gap={"20px"}
        divider={
          <Box
            sx={{
              border: "0.75px solid #D9DBE9",
              display: { xs: "none", md: "flex" },
            }}
          />
        }
        mt={"90px"}
      >
        <FilterLayout
          dropDownsData={dropDownsData}
          sx={{ display: { xs: "none", md: "flex" } }}
        />
        <BodyLayout
          articlesData={articlesData}
          label="Top Headlines in Israel"
        />
      </Stack>
    </Stack>
  );
};

export default MainPage;
