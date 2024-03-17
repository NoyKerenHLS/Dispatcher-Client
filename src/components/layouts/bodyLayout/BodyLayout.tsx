import { FC } from "react";
import { Box, Stack } from "@mui/material";
import ArticlesLayout from "./articlesLayout/ArticlesLayout";
import WidgetLayout from "./widgetsLayout/WidgetLayout";
import { lineChartData, pieChartData } from "../../../utils/MockUpData";

interface Props {}

// will calculate charts data here based on articles data

const BodyLayout: FC<Props> = () => {
  return (
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
        <ArticlesLayout mr={{ xs: "10px", md: "30px" }} />
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <WidgetLayout
          pieChartData={pieChartData}
          lineChartData={lineChartData}
        />
      </Box>
    </Stack>
  );
};

export default BodyLayout;
