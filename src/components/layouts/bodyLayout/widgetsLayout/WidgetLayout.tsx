import { Stack } from "@mui/material";
import { FC } from "react";
import WidgetCard from "../../../card/WidgetCard/WidgetCard";
import PieChart from "../../../chart/pieChart/PieChart";
import LineChart from "../../../chart/lineChart/LineChart";
import { PieChartData } from "../../../chart/pieChart/types";
import { LineChartData } from "../../../chart/lineChart/types";

interface Props {
  pieChartData: PieChartData[];
  lineChartData: LineChartData[];
}

const WidgetLayout: FC<Props> = ({ pieChartData, lineChartData }) => {
  return (
    <Stack gap="24px">
      <WidgetCard title="Sources">
        <PieChart data={pieChartData} />
      </WidgetCard>
      <WidgetCard title="Dates">
        <div style={{ marginTop: "90px" }}>
          <LineChart data={lineChartData} />
        </div>
      </WidgetCard>
    </Stack>
  );
};

export default WidgetLayout;
