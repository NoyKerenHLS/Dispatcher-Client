import { FC } from "react";
import { ArticleData } from "../../../card/articleCard/types";
import { Stack, StackProps } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";

interface Props extends StackProps {
  articlesData: ArticleData[];
}

const ArticlesLayout: FC<Props> = ({ articlesData, ...props }) => {
  return (
    <Stack {...props} gap="24px" alignItems="center">
      {articlesData.map((data) => (
        <ArticleCard key={data.source.id} data={data} />
      ))}
    </Stack>
  );
};

export default ArticlesLayout;
