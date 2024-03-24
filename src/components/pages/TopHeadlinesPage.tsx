import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { countryCodes, createSourcesCoedes } from "./utils";
import { getSources, getTopHeadlinesArticles } from "../../ApiData";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { ApiData } from "../card/articleCard/types";
import { Box, Stack, Typography } from "@mui/material";
import { landingLabelStyle, resultLabelStyle } from "./styles";
import { PieChartData } from "../chart/pieChart/types";
import { LineChartData } from "../chart/lineChart/types";
import { TopHeadlinesFilters } from "./types";
import ArticlesContainer from "../containers/bodyLayout/articlesContainer/ArticlesContaier";
import {
  createLineDataArr,
  createPieDataArr,
} from "../containers/bodyLayout/widgetsContainer/utils";
import WidgetContainer from "../containers/bodyLayout/widgetsContainer/WidgetsContainer";

interface IProps {}

const TopHeadlinesPage: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const sourceData = useQuery({ queryKey: ["sources"], queryFn: getSources });

  let sourcesCodes: Record<string, string> = {};

  if (sourceData.data?.sources) {
    sourcesCodes = createSourcesCoedes(sourceData.data?.sources);
  }

  const country = searchParams.get("country") as keyof typeof countryCodes;
  const category = searchParams.get("category") || "";
  const source = searchParams.get("sources") as keyof typeof sourcesCodes;
  const q = searchParams.get("q") || "";

  const countryCode = countryCodes[country] || "il";
  const sourceCode = sourcesCodes[source];

  let label = "Top Headlines In Isreal";
  let labelSx = landingLabelStyle;

  const filters: TopHeadlinesFilters = { category, sourceCode, countryCode, q };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["topHeadlinesArticles", filters],
    queryFn: getTopHeadlinesArticles,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.articles.length
        ? allPages.length + 1
        : undefined;

      return nextPage;
    },
  });

  if (country || category || source) {
    label = `${data?.pages[0].totalResults} Total results`;
    labelSx = resultLabelStyle;
  }

  const articles =
    data?.pages.flatMap<ApiData["articles"][0]>((page) => page.articles) ?? [];

  const pieChartData: PieChartData[] = createPieDataArr(articles);
  const lineChartData: LineChartData[] = createLineDataArr(articles);

  return (
    <Stack gap="20px">
      <Typography sx={labelSx}>{label}</Typography>
      <Stack
        direction="row"
        sx={{
          gap: "15px",
          pr: { xs: "10px", md: "unset" },
          pl: { xs: "20px", md: "unset" },
        }}
      >
        <ArticlesContainer
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          articles={articles}
          mr={{ xs: "10px", md: "30px" }}
        />
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <WidgetContainer
            pieChartData={pieChartData}
            lineChartData={lineChartData}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default TopHeadlinesPage;
