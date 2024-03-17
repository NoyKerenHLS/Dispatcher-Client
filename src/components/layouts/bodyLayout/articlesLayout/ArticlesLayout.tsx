import { FC, useEffect } from "react";
import { ApiData } from "../../../card/articleCard/types";
import { Stack, StackProps, Typography } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { countryCodes } from "../../../mainPage/utils";
import { getTopHeadlinesArticles } from "../../../../ApiData";
import { useInView } from "react-intersection-observer";
import { landingLabelStyle, resultLabelStyle } from "../../../mainPage/styles";

interface Props extends StackProps {}

const ArticlesLayout: FC<Props> = ({ ...props }) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const { ref, inView } = useInView();

  var label = "Top Headlines In Isreal";
  var labelSx = landingLabelStyle;

  const country = searchParams.get("country") as keyof typeof countryCodes;
  const category = searchParams.get("category") || "";
  const sources = searchParams.get("sources") || "";

  var countryCode = countryCodes[country] || "il";

  const filters = { category, sources, countryCode };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["articles", filters],
      queryFn: getTopHeadlinesArticles, //TODO get articles
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

  const content = data?.pages.map((apiData: ApiData) =>
    apiData.articles.map((article, index) => {
      if (apiData.articles.length === index + 1) {
        return (
          <ArticleCard
            innerRef={ref}
            key={article.title}
            data={article}
          ></ArticleCard>
        );
      }
      return <ArticleCard key={article.title} data={article}></ArticleCard>;
    })
  );

  return (
    <Stack gap="20px">
      <Typography sx={labelSx}>{label}</Typography>
      <Stack {...props} gap="24px" alignItems="center">
        {content}
      </Stack>
    </Stack>
  );
};

export default ArticlesLayout;
