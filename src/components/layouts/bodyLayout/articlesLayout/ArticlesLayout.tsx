import { FC } from "react";
import { ApiData } from "../../../card/articleCard/types";
import { Stack, StackProps } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";

interface Props extends StackProps {
  articlesData?: ApiData;
}

const ArticlesLayout: FC<Props> = ({ articlesData, ...props }) => {
  return (
    <Stack {...props} gap="24px" alignItems="center">
      {articlesData
        ? articlesData?.articles.map((data) => (
            <ArticleCard key={data.title} data={data} />
          ))
        : ""}
    </Stack>
  );
};

export default ArticlesLayout;
