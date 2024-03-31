import { Box, Skeleton, Stack } from "@mui/material";
import { FC } from "react";
import WidgetCard from "../../../card/WidgetCard/WidgetCard";
import PieChart from "../../../chart/pieChart/PieChart";
import LineChart from "../../../chart/lineChart/LineChart";
import { PieChartData } from "../../../chart/pieChart/types";
import { LineChartData } from "../../../chart/lineChart/types";

interface Props {
  pieChartData: PieChartData[];
  lineChartData: LineChartData[];
  loading: boolean;
}

const WidgetContainer: FC<Props> = ({
  pieChartData,
  lineChartData,
  loading,
}) => {
  return (
    <Stack gap="24px">
      <WidgetCard title="Sources">
        {loading ? (
          <Stack gap="30px" height="400px" mt={"20px"} alignItems={"center"}>
            <Skeleton
              sx={{ alignSelf: "center", display: "flex" }}
              variant="circular"
              width="130px"
              height="130px"
            />
            <Skeleton variant="text" height={10} width="250px" />
            <Skeleton variant="text" height={10} width="250px" />
          </Stack>
        ) : (
          <PieChart data={pieChartData} />
        )}
      </WidgetCard>
      <WidgetCard title="Dates">
        {loading ? (
          <Box display="flex" justifyContent="center">
            <Skeleton
              variant="rectangular"
              width="250px"
              height="250px"
              sx={{ mt: "20px", borderRadius: "20px" }}
            />
          </Box>
        ) : (
          <div style={{ marginTop: "90px" }}>
            <LineChart data={lineChartData} />
          </div>
        )}
      </WidgetCard>
    </Stack>
  );
};

export default WidgetContainer;
