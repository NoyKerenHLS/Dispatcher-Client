import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { APP_BAR_HEIGHT } from "../navBar/styles";
import FilterContainer from "../filtersContainer/FiltersContainer";
import FilterContainerMobileTablet from "../filtersContainer/FiltersContainerMobileTablet";
import {
  everythingDropDowns,
  headlinesDropDowns,
  transformSources,
} from "./utils";
import { useSearchParams } from "react-router-dom";
import { getSources } from "../../ApiData";
import TopHeadlinesPage from "./TopHeadlinesPage";
import EverythingPage from "./EverythingPage";
import EmptyPage from "./EmptyPage";
import { useQuery } from "@tanstack/react-query";
import { Item } from "../dropdown/types";
import { Scope } from "./types";

interface IProps {}

const MainPage: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const data = useQuery({ queryKey: ["sources"], queryFn: getSources });

  let sources: Item[] = [];

  if (data.data?.sources) {
    sources = transformSources(data.data?.sources);
  }

  const pageScope: Scope = searchParams.get("scope") as Scope;
  const q = searchParams.get("q");

  const dropDownsData =
    pageScope === "topheadlines" ? headlinesDropDowns : everythingDropDowns;

  dropDownsData.map((dropDownData) => {
    if (dropDownData.label === "Sources") {
      dropDownData.items = sources;
    }
  });

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
          <FilterContainer
            dropDownsData={dropDownsData}
            sx={{ display: { xs: "none", md: "flex" } }}
          />
          <FilterContainerMobileTablet dropDownData={dropDownsData[0]} />
        </Box>
        {pageScope === "topheadlines" ? (
          <TopHeadlinesPage />
        ) : q ? (
          <EverythingPage />
        ) : (
          <EmptyPage />
        )}
      </Stack>
    </Stack>
  );
};

export default MainPage;
