import { Box, Stack } from "@mui/material";
import { FC } from "react";
import FilterLayout from "../filtersLayout/FilterLayout";
import { dropDownsData, sourceDropDown } from "../../utils/MockUpData";
import FilterLayoutMobileTablet from "../filtersLayout/FilterLayoutMobileTablet";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";

interface IProps {}

const Everything: FC<IProps> = () => {
  return (
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
      {/* <BodyLayout articlesData={} /> */}
    </Stack>
  );
};

export default Everything;
