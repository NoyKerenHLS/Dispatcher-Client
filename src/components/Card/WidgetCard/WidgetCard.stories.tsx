import type { Meta, StoryObj } from "@storybook/react";

import WidgetCard from "./WidgetCard";
import PieChart from "../../chart/pieChart/PieChart";
import { pieChartData } from "../../../utils/MockUpData";

const meta: Meta<typeof WidgetCard> = {
  component: WidgetCard,
};

export default meta;
type Story = StoryObj<typeof WidgetCard>;

export const Primary: Story = {
  args: {
    title: "Sources",
    children: <PieChart data={pieChartData} />,
  },
};
