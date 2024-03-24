import { FC, useEffect } from "react";
import { Box, Stack, StackProps } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";
import { Article } from "./type";
import { useInView } from "react-intersection-observer";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

interface Props extends StackProps {
  articles: Article[];
  hasNextPage: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
}

const ArticlesContainer: FC<Props> = ({
  articles,
  hasNextPage,
  fetchNextPage,
  ...props
}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <Box
      sx={{
        overflow: "auto",
        height: "100vh",
      }}
    >
      <Stack {...props} gap="24px" alignItems="stretch">
        {articles.map((article, index) => {
          const shouldObserveInView = index < articles.length - 1;

          if (shouldObserveInView) {
            return (
              <ArticleCard
                innerRef={ref}
                key={index + article.title}
                data={article}
              />
            );
          }

          return <ArticleCard key={article.title} data={article} />;
        })}
      </Stack>
    </Box>
  );
};

export default ArticlesContainer;
