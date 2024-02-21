import { FC } from "react";
import { ArticleData } from "../../../card/articleCard/types";
import { Stack } from "@mui/material";
import ArticleCard from "../../../card/articleCard/ArticleCard";

interface Props {
  articlesData: ArticleData[];
}

const ArticlesLayout: FC<Props> = ({ articlesData }) => {
  return (
    <Stack gap={"24px"}>
      {articlesData.map((data) => (
        <ArticleCard key={data.title} data={data} />
      ))}
    </Stack>
  );
};

export default ArticlesLayout;
