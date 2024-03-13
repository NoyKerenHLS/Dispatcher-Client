import { Box, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterLayout from "../filtersLayout/FilterLayout";
import FilterLayoutMobileTablet from "../filtersLayout/FilterLayoutMobileTablet";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";
import { dropDownsData, sourceDropDown } from "../../utils/MockUpData";
import { useQuery } from "@tanstack/react-query";
import { getTopHeadlinesArticles } from "../../ApiData";
import { ApiData } from "../card/articleCard/types";
import { countryCodes } from "./utils";
import { landingLabelStyle, resultLabelStyle } from "./styles";

interface IProps {}

const TopHeadLines: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const country = searchParams.get("country") as keyof typeof countryCodes;
  const category = searchParams.get("category");
  const sources = searchParams.get("sources");

  var countryCode = countryCodes[country] ? countryCodes[country] : "il";
  var label = "Top Headlines In Isreal";
  var labelSx = landingLabelStyle;

  const { data } = useQuery<ApiData>({
    queryKey: ["articles", { countryCode, category, sources }],
    queryFn: getTopHeadlinesArticles,
  });

  if (country || category || sources) {
    label = `${data?.totalResults} Total results`;
    labelSx = resultLabelStyle;
  }

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
      <BodyLayout
        articlesData={data}
        label={<Typography sx={labelSx}>{label}</Typography>}
      />
    </Stack>
  );
};

export default TopHeadLines;
