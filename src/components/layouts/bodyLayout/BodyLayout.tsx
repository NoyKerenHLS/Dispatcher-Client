import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ArticlesLayout from "./articlesLayout/ArticlesLayout";
import WidgetLayout from "./widgetsLayout/WidgetLayout";
import { lineChartData, pieChartData } from "../../../utils/MockUpData";
import { ApiData } from "../../card/articleCard/types";

interface Props {
  articlesData?: ApiData;
  label?: React.ReactNode;
}

// will calculate charts data here based on articles data

const BodyLayout: FC<Props> = ({ articlesData, label }) => {
  return (
    <Stack gap={"20px"}>
      {label}
      <Stack
        direction={"row"}
        sx={{
          gap: "15px",
          pr: { xs: "10px", md: "unset" },
          pl: { xs: "20px", md: "unset" },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            height: "100vh",
          }}
        >
          <ArticlesLayout
            articlesData={articlesData}
            mr={{ xs: "10px", md: "30px" }}
          />
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
