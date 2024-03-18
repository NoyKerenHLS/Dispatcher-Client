import { FC } from "react";
import { Box, Stack } from "@mui/material";
import WidgetLayout from "./widgetsLayout/WidgetLayout";
import { lineChartData, pieChartData } from "../../../utils/MockUpData";
import { useSearchParams } from "react-router-dom";
import { Scope } from "../../../ApiData";
import TopHeadlinesPage from "../../pages/TopHeadlinesPage";
import EverythingPage from "../../pages/EverythingPage";

interface Props {}

// will calculate charts data here based on articles data

const BodyLayout: FC<Props> = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const pageScope: Scope = "topHeadlines"; //searchParams.get("scope") as Scope;

  return (
    <Stack
      direction={"row"}
      sx={{
        gap: "15px",
        pr: { xs: "10px", md: "unset" },
        pl: { xs: "20px", md: "unset" },
      }}
    >
      {pageScope === "topHeadlines" ? <TopHeadlinesPage /> : <EverythingPage />}

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
