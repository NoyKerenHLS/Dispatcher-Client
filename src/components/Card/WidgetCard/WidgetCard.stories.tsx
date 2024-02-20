import type { Meta, StoryObj } from "@storybook/react";

import WidgetCard from "./WidgetCard";

const meta: Meta<typeof WidgetCard> = {
  component: WidgetCard,
};

export default meta;
type Story = StoryObj<typeof WidgetCard>;

export const Primary: Story = {
  args: {},
};
