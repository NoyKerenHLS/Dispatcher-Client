import styled from "styled-components";
import { PieChart as RechartsPieChart } from "recharts";

export const COLORS = [
  "##4287f5",
  "##f55a42",
  "#ff9933",
  "#ff99ff",
  "#66ff33",
  "#9933ff",
  "#000099",
  "#ffcccc",
  "#66ffff",
  "#cc3399",
  "#ffff00",
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33FFC5",
  "#F633FF",
  "#FF3333",
  "#33FFCB",
  "#B333FF",
  "#33FFF7",
  "#FFCF33",
  "#FF33F4",
  "#7B33FF",
  "#33FFC9",
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33FFC5",
  "#F633FF",
  "#FF3333",
  "#33FFCB",
  "#B333FF",
  "#33FFF7",
  "#FFCF33",
  "#FF33F4",
  "#7B33FF",
  "#33FFC9",
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33FFC5",
  "#F633FF",
  "#FF3333",
  "#33FFCB",
  "#B333FF",
  "#33FFF7",
  "#FFCF33",
  "#FF33F4",
  "#7B33FF",
  "#33FFC9",
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#33FFC5",
  "#F633FF",
  "#FF3333",
];

export const legendNameStyle = { marginLeft: "18px", color: "#030035" };
export const legendValStyle = { color: "#9FA2B4", marginRight: "10px" };

export const StyledPieChart = styled(RechartsPieChart)`
  .recharts-layer.recharts-pie,
  .recharts-sector:focus {
    outline: none !important;
    outline-color: none;
    outline-style: none;
    outline-width: none;
  }
`;
