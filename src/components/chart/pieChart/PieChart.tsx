import { FC } from "react";
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
import { pieChartData } from "../../../utils/MockUpData";

interface Props {
  data: PieChartData[];
}

const PieChart: FC<Props> = ({ data }) => {
  const sumValues = data.reduce((acc, entry) => acc + entry.value, 0);

  console.log(data);

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
    color: COLORS[(index + 1) % COLORS.length],
  }));

  return (
    <StyledPieChart width={372} height={395}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
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
            fill={COLORS[(index + 1) % COLORS.length]}
          />
        ))}
        <Label
          value={data.length}
          position="center"
          style={{ color: "#030035" }}
        ></Label>
      </Pie>

      <Legend
        align="center"
        wrapperStyle={{ top: 170, overflow: "auto", height: "250px" }}
        payload={payload}
        content={({ payload }) => (
          <Stack>
            {payload?.map((entry, index) => (
              <Stack direction="row" key={`entry-${index}`}>
                <span>
                  <CircleIcon sx={{ width: "10px", color: entry.color }} />
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
