import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { APP_BAR_HEIGHT } from "../navBar/styles";
import FilterContainer from "../filtersContainer/FiltersContainer";
import {
  createFilters,
  dropdowns,
  getArticlesFromPage,
  landingLabel,
} from "./utils";
import { useSearchParams } from "react-router-dom";
import { getArticles, getSources } from "../../ApiData";
import EmptyPage from "./EmptyPage";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Scope } from "./types";
import ArticlesContainer from "../containers/bodyContainer/articlesContainer/ArticlesContaier";
import WidgetContainer from "../containers/bodyContainer/widgetsContainer/WidgetsContainer";
import { landingLabelStyle, resultLabelStyle } from "./styles";
import { PieChartData } from "../chart/pieChart/types";
import {
  createLineDataArr,
  createPieDataArr,
} from "../containers/bodyContainer/widgetsContainer/utils";
import { LineChartData } from "../chart/lineChart/types";

interface IProps {}

const MainPage: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const params = [];
  for (let entry of searchParams.entries()) {
    if (entry[0] !== "scope") params.push(entry);
  }

  const filters = createFilters(params);
  const pageSize = 10;
  const pageScope: Scope =
    (searchParams.get("scope") as Scope) || "top-headlines";

  const isLandingPage =
    pageScope === "top-headlines" && searchParams.get("Country") === "il";

  const sourceData = useQuery({ queryKey: ["sources"], queryFn: getSources });

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["articles", pageScope, filters, pageSize],
    queryFn: getArticles,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.articles.length
        ? allPages.length + 1
        : undefined;

      return nextPage;
    },
  });

  const articles = getArticlesFromPage(data?.pages ?? []);
  const isEmptyPage =
    data?.pages[0].totalResults === 0 ||
    (pageScope === "everything" && !searchParams.get("q"));

  const pieChartData: PieChartData[] = createPieDataArr(articles);
  const lineChartData: LineChartData[] = createLineDataArr(articles);

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
        <FilterContainer
          dropDownsData={dropdowns[pageScope]}
          sources={sourceData.data?.sources}
        />

        <Stack
          direction={"row"}
          sx={{
            gap: "15px",
            pr: { xs: "10px", md: "unset" },
            pl: { xs: "20px", md: "unset" },
          }}
        >
          <Stack gap="20px">
            {isLandingPage ? (
              <Typography sx={landingLabelStyle}>{landingLabel}</Typography>
            ) : (
              <Typography
                sx={resultLabelStyle}
              >{`${data?.pages[0].totalResults} Total results`}</Typography>
            )}
            {isEmptyPage ? (
              <EmptyPage />
            ) : (
              <Stack
                direction={"row"}
                sx={{
                  gap: "15px",
                  pr: { xs: "10px", md: "unset" },
                  pl: { xs: "20px", md: "unset" },
                }}
              >
                <ArticlesContainer
                  articles={articles}
                  hasNextPage={hasNextPage}
                  fetchNextPage={fetchNextPage}
                  mr={{ xs: "10px", md: "30px" }}
                />
                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                  <WidgetContainer
                    pieChartData={pieChartData}
                    lineChartData={lineChartData}
                  />
                </Box>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MainPage;
