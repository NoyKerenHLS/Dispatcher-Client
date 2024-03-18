import { FC, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { countryCodes } from "./utils";
import { Scope, getTopHeadlinesArticles } from "../../ApiData";
import { useInfiniteQuery } from "@tanstack/react-query";
import ArticlesLayout from "../layouts/bodyLayout/articlesLayout/ArticlesLayout";
import { ApiData } from "../card/articleCard/types";
import { useInView } from "react-intersection-observer";
import { Stack, Typography } from "@mui/material";
import { landingLabelStyle, resultLabelStyle } from "./styles";

interface IProps {}

const TopHeadlinesPage: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const { ref, inView } = useInView();

  const country = searchParams.get("country") as keyof typeof countryCodes;
  const category = searchParams.get("category") || "";
  const sources = searchParams.get("sources") || "";
  const q = searchParams.get("q") || "";
  const scope: Scope = (searchParams.get("scope") as Scope) || "topHeadlines";

  const countryCode = countryCodes[country] || "il";
  let label = "Top Headlines In Isreal";
  let labelSx = landingLabelStyle;

  const filters = { scope, category, sources, countryCode, q }; //TODO make type

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

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (country || category || sources) {
    label = `${data?.pages[0].totalResults} Total results`;
    labelSx = resultLabelStyle;
  }

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

export default TopHeadlinesPage;
