import { Box, Stack } from "@mui/material";
import React, { FC } from "react";
import NavBar from "../navBar/NavBar";
import {
  articlesData,
  dropDownsData,
  handleSearch,
  sourceDropDown,
} from "../../utils/MockUpData";
import FilterLayout from "../filtersLayout/FilterLayout";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";
import FilterLayoutMobileTablet from "../filtersLayout/FilterLayoutMobileTablet";
import { APP_BAR_HEIGHT } from "../navBar/styles";

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
      >
        <Box>
          <FilterLayout
            dropDownsData={dropDownsData}
            sx={{ display: { xs: "none", md: "flex" } }}
          />
          <FilterLayoutMobileTablet dropDownData={sourceDropDown} />
        </Box>
        <BodyLayout
          articlesData={articlesData}
          label="Top Headlines in Israel"
        />
      </Stack>
    </Stack>
  );
};

export default MainPage;
