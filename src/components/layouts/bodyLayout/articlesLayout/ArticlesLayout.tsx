import { FC } from "react";
import { ArticleData } from "../../../card/articleCard/types";
import { Paper, Stack, StackProps } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";

interface Props extends StackProps {
  articlesData: ArticleData[];
}

const ArticlesLayout: FC<Props> = ({ articlesData, ...props }) => {
  return (
    <Stack {...props} gap="24px">
      {articlesData.map((data) => (
        <ArticleCard key={data.title} data={data} />
      ))}
    </Stack>
  );
};

export default ArticlesLayout;
