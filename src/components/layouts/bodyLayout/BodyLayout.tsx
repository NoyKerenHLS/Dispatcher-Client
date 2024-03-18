import { FC } from "react";
import { Box, Stack } from "@mui/material";
import WidgetLayout from "./widgetsLayout/WidgetLayout";
import { lineChartData, pieChartData } from "../../../utils/MockUpData";
import { useSearchParams } from "react-router-dom";
import { Scope } from "../../../ApiData";
import TopHeadlinesPage from "../../pages/TopHeadlinesPage";
import EverythingPage from "../../pages/EverythingPage";
import EmptyPage from "../../pages/EmptyPage";

interface Props {}

// will calculate charts data here based on articles data

const BodyLayout: FC<Props> = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const pageScope: Scope = searchParams.get("scope") as Scope;
  const q = searchParams.get("q");

  return (
    <Stack
      direction={"row"}
      sx={{
        gap: "15px",
        pr: { xs: "10px", md: "unset" },
        pl: { xs: "20px", md: "unset" },
      }}
    >
      {pageScope === "topheadlines" ? (
        <TopHeadlinesPage />
      ) : q ? (
        <EverythingPage />
      ) : (
        <EmptyPage />
      )}

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
