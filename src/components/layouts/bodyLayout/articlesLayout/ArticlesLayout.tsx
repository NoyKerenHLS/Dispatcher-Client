import { FC } from "react";
import { Box, Stack, StackProps } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";
import { Article } from "./type";

interface Props extends StackProps {
  articles: Article[];
  innerRef: React.Ref<HTMLDivElement>;
}

const ArticlesLayout: FC<Props> = ({ articles, innerRef, ...props }) => {
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "100vh",
      }}
    >
      <Stack {...props} gap="24px" alignItems="center">
        {articles.map((article, index) => {
          const shouldObserveInView = index < articles.length - 1;

          if (shouldObserveInView) {
            return (
              <ArticleCard
                innerRef={innerRef}
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

export default ArticlesLayout;
