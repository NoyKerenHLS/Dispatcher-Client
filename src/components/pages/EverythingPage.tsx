import { FC, useEffect } from "react";
import ArticlesLayout from "../layouts/bodyLayout/articlesLayout/ArticlesLayout";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getEverytingArticles, getSources } from "../../ApiData";
import { resultLabelStyle } from "./styles";
import { ApiData } from "../card/articleCard/types";
import { Box, Stack, Typography } from "@mui/material";
import { createSourcesCoedes, languageCodes } from "./utils";
import WidgetLayout from "../layouts/bodyLayout/widgetsLayout/WidgetLayout";
import { PieChartData } from "../chart/pieChart/types";
import {
  createLineDataArr,
  createPieDataArr,
} from "../layouts/bodyLayout/widgetsLayout/utils";
import { LineChartData } from "../chart/lineChart/types";
import { everythingFilters } from "./types";
import { LastPage } from "@mui/icons-material";

interface IProps {}

const EverythingPage: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();

  const sourceData = useQuery({ queryKey: ["sources"], queryFn: getSources });

  let sourcesCodes: Record<string, string> = {};

  if (sourceData.data?.sources) {
    sourcesCodes = createSourcesCoedes(sourceData.data?.sources);
  }

  const sortBy = searchParams.get("sortBy") || "";
  const language = searchParams.get("language") as keyof typeof languageCodes;
  const source = searchParams.get("sources") as keyof typeof sourcesCodes;
  const date = searchParams.get("date") || "";
  const q = searchParams.get("q") || "";

  const languageCode = languageCodes[language] || "";
  const sourceCode = sourcesCodes[source];

  const filters: everythingFilters = {
    sortBy,
    sourceCode,
    languageCode,
    date,
    q,
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["everythingArticles", filters],
    queryFn: getEverytingArticles,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.articles.length
        ? allPages.length + 1
        : undefined;

      return nextPage;
    },
  });

  const label = `${data?.pages[0].totalResults} Total results`;
  const labelSx = resultLabelStyle;

  const articles =
    data?.pages.flatMap<ApiData["articles"][0]>((page) => page.articles) ?? [];

  const pieChartData: PieChartData[] = createPieDataArr(articles);
  const lineChartData: LineChartData[] = createLineDataArr(articles);

  return (
    <Stack gap="20px">
      <Typography sx={labelSx}>{label}</Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: "15px",
          pr: { xs: "10px", md: "unset" },
          pl: { xs: "20px", md: "unset" },
        }}
      >
        <ArticlesLayout
          articles={articles}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          mr={{ xs: "10px", md: "30px" }}
        />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <WidgetLayout
            pieChartData={pieChartData}
            lineChartData={lineChartData}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default EverythingPage;
