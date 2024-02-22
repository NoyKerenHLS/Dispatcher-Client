import { FC } from "react";
import { ArticleData } from "../../card/articleCard/types";
import { Box, Grid, Paper, Stack } from "@mui/material";
import ArticlesLayout from "./articlesLayout/ArticlesLayout";
import WidgetLayout from "./widgetsLayout/WidgetLayout";
import { lineChartData, pieChartData } from "../../../utils/MockUpData";

interface Props {
  articlesData: ArticleData[];
}

// will calculate charts data here based on articles data

const BodyLayout: FC<Props> = ({ articlesData }) => {
  return (
    <Stack direction={"row"} gap={"15px"}>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <ArticlesLayout articlesData={articlesData} mr={"30px"} />
      </Box>
      <Box>
        <WidgetLayout
          pieChartData={pieChartData}
          lineChartData={lineChartData}
        />
      </Box>
    </Stack>
  );
};

export default BodyLayout;
