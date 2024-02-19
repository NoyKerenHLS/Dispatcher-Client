import { PieChart as RechartsPieChart, Pie, Cell, Legend } from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

const PieChart = () => {
  const data = [
    { name: "NBC", value: 200 },
    { name: "Vulture", value: 300 },
    { name: "CNN", value: 300 },
    { name: "ESPN", value: 200 },
  ];
  const sumValues = data.reduce((acc, entry) => acc + entry.value, 0);
  const percentage = (total: number, value: number) => {
    return Math.round((value / total) * 100);
  };
  const COLORS = ["#343A6E", "#030035", "#DDF3FE", "#FF9800"];

  const legandData: Payload[] = data.map((entry, index) => ({
    value: (
      <span>
        <span style={{ marginLeft: "18px", color: "#000" }}>{entry.name}</span>
        <span style={{ color: "gray" }}>
          {percentage(sumValues, entry.value) + "%"}
        </span>
      </span>
    ),
    dataKey: "value",
    type: "circle",
    color: COLORS[index % COLORS.length],
  }));

  return (
    <RechartsPieChart width={372} height={395}>
      <Pie
        data={data}
        cx={"20%"}
        cy={"18%"}
        innerRadius={60}
        outerRadius={70}
        dataKey="value"
        fill="#D54958"
        isAnimationActive={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend
        wrapperStyle={{
          bottom: 100,
        }}
        iconType="circle"
        iconSize={5}
        align="left"
        layout="vertical"
        payload={legandData}
      />
    </RechartsPieChart>
  );
};

export default PieChart;
