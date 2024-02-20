import { AreaChart as RechartsAreaChart, XAxis, Area } from "recharts";
import { LineChartData } from "./types";

interface Props {
  data: LineChartData[];
}

const LineChart = ({ data }: Props) => {
  return (
    <RechartsAreaChart
      width={385}
      height={188}
      data={data}
      margin={{
        top: 5,
        bottom: 5,
      }}
    >
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        padding={{ right: 20, left: 14 }}
        tickMargin={15}
        fontSize={13}
        fontWeight={700}
        color="#5A5A89"
      />
      <defs>
        <linearGradient id="fillColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0, 88, 185, 1)" />
          <stop offset="100%" stopColor="rgba(0, 185, 255, 0)" />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="value"
        stroke="#0058B9"
        strokeWidth={4}
        dot={false}
        isAnimationActive={false}
        fill="url(#fillColor)"
      />
    </RechartsAreaChart>
  );
};

export default LineChart;
