import { FC } from "react";
import { ArticleData } from "../../card/articleCard/types";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import ArticlesLayout from "./articlesLayout/ArticlesLayout";
import WidgetLayout from "./widgetsLayout/WidgetLayout";
import { lineChartData, pieChartData } from "../../../utils/MockUpData";

interface Props {
  articlesData: ArticleData[];
  label: string;
}

// will calculate charts data here based on articles data

const BodyLayout: FC<Props> = ({ articlesData, label }) => {
  return (
    <Stack gap={"20px"}>
      <Typography
        sx={{
          color: "#262146",
          fontSize: "24px",
          fontWeight: 500,
          width: "100%",
        }}
      >
        {label}
      </Typography>
      <Stack direction={"row"} gap={"15px"}>
        <Box
          sx={{
            overflow: "auto",
            height: "100vh",
          }}
        >
          <ArticlesLayout articlesData={articlesData} mr={"30px"} />
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <WidgetLayout
            pieChartData={pieChartData}
            lineChartData={lineChartData}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default BodyLayout;
