import { Box, Stack } from "@mui/material";
import { FC } from "react";
import { APP_BAR_HEIGHT } from "../navBar/styles";
import FilterLayout from "../filtersLayout/FilterLayout";
import FilterLayoutMobileTablet from "../filtersLayout/FilterLayoutMobileTablet";
import BodyLayout from "../layouts/bodyLayout/BodyLayout";
import { everythingDropDowns, headlinesDropDowns } from "./utils";
import { useSearchParams } from "react-router-dom";
import { Scope } from "../../ApiData";
import TopHeadlinesPage from "./TopHeadlinesPage";
import EverythingPage from "./EverythingPage";
import EmptyPage from "./EmptyPage";

interface IProps {}

const MainPage: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const pageScope: Scope = searchParams.get("scope") as Scope;
  const q = searchParams.get("q");

  const dropDownsData =
    pageScope === "topheadlines" ? headlinesDropDowns : everythingDropDowns; // TODO
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
            dropDownData={dropDownsData[0]} // TODO this is mockup
          />
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
