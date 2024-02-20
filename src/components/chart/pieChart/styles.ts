import styled from "styled-components";
import { PieChart as RechartsPieChart } from "recharts";

export const COLORS = ["#343A6E", "#030035", "#DDF3FE", "#FF9800"];

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
