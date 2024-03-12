import { Box, Stack } from "@mui/material";
import { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterLayout from "../filtersLayout/FilterLayout";
import FilterLayoutMobileTablet from "../filtersLayout/FilterLayoutMobileTablet";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";
import { dropDownsData, sourceDropDown } from "../../utils/MockUpData";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../../ApiData";
import { ApiData } from "../card/articleCard/types";

interface IProps {}

const TopHeadLines: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  //const [country, setCountry] = useState("il");

  const countryCodes = {
    Israel: "il",
    USA: "us",
    Greece: "gr",
  };

  const country = searchParams.get("country") as keyof typeof countryCodes;
  var countryCode = countryCodes[country] ? countryCodes[country] : "il";

  const { data } = useQuery<ApiData>({
    queryKey: ["articles", { countryCode }],
    queryFn: getArticles,
  });

  console.log(data?.articles);

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
      <BodyLayout articlesData={data} label="Top Headlines in Israel" />
    </Stack>
  );
};

export default TopHeadLines;
