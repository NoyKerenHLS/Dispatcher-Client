import { FC, useEffect } from "react";
import ArticlesLayout from "../layouts/bodyLayout/articlesLayout/ArticlesLayout";
import { useSearchParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Scope, getEverytingArticles } from "../../ApiData";
import { resultLabelStyle } from "./styles";
import { ApiData } from "../card/articleCard/types";
import { Stack, Typography } from "@mui/material";

interface IProps {}

const EverythingPage: FC<IProps> = (props) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const { ref, inView } = useInView();

  const sortBy = searchParams.get("sortBy") || "";
  const language = searchParams.get("language") || "";
  const sources = searchParams.get("sources") || "";
  const date = searchParams.get("date") || "";

  const filters = { sortBy, sources, language, date };

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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  const label = `${data?.pages[0].totalResults} Total results`;
  const labelSx = resultLabelStyle;

  const articles =
    data?.pages.flatMap<ApiData["articles"][0]>((page) => page.articles) ?? [];
  return (
    <Stack gap="20px">
      <Typography sx={labelSx}>{label}</Typography>
      <ArticlesLayout
        innerRef={ref}
        articles={articles}
        mr={{ xs: "10px", md: "30px" }}
      />
    </Stack>
  );
};

export default EverythingPage;
