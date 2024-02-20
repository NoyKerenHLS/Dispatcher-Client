import { Stack } from "@mui/material";
import { Pie, Cell, Legend, Label } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import CircleIcon from "@mui/icons-material/Circle";
import { percentage } from "./utils";
import { PieChartData } from "./types";
import {
  COLORS,
  StyledPieChart,
  legendNameStyle,
  legendValStyle,
} from "./styles";

interface Props {
  data: PieChartData[];
  label: string;
}

const PieChart = ({ data, label }: Props) => {
  const sumValues = data.reduce((acc, entry) => acc + entry.value, 0);

  const payload: Payload[] = data.map((entry, index) => ({
    value: (
      <Stack direction="row" justifyContent="space-between" width="100%">
        <span style={legendNameStyle}>{entry.name}</span>
        <span style={legendValStyle}>
          {percentage(sumValues, entry.value) + "%"}
        </span>
      </Stack>
    ),
    dataKey: "value",
    type: "circle",
    color: COLORS[index % COLORS.length],
  }));

  return (
    <StyledPieChart width={372} height={395} style={{}}>
      <Pie
        data={data}
        cx="50%"
        cy="25%"
        innerRadius={60}
        outerRadius={70}
        dataKey="value"
        fill="#D54958"
        isAnimationActive={false}
        stroke=""
      >
        {data.map((entry, index) => (
          <Cell
            style={{ outline: "none" }}
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
        <Label
          value={label}
          position="center"
          style={{ color: "#030035" }}
        ></Label>
      </Pie>

      <Legend
        align="center"
        wrapperStyle={{ top: 160 }}
        payload={payload}
        content={({ payload }) => (
          <Stack>
            {payload?.map((entry, index) => (
              <Stack direction="row" key={`entry-${index}`}>
                <span>
                  <CircleIcon sx={{ width: "5px", color: entry.color }} />
                </span>
                {entry.value}
              </Stack>
            ))}
          </Stack>
        )}
      />
    </StyledPieChart>
  );
};

export default PieChart;
