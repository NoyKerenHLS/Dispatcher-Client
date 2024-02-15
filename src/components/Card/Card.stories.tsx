import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Box></Box>,
    cardType: "article",
  },
};
