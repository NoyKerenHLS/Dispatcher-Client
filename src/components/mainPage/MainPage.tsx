import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { APP_BAR_HEIGHT } from "../navBar/styles";
import FilterLayout from "../filtersLayout/FilterLayout";
import FilterLayoutMobileTablet from "../filtersLayout/FilterLayoutMobileTablet";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";
import { headlinesDropDowns } from "./utils";
import { sourceDropDown } from "../../utils/MockUpData";

interface IProps {}

const MainPage: FC<IProps> = () => {
  const dropDownsData = headlinesDropDowns; // TODO
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
          <FilterLayoutMobileTablet
            dropDownData={sourceDropDown} // TODO this is mockup
          />
        </Box>
        <BodyLayout />
      </Stack>
    </Stack>
  );
};

export default MainPage;
