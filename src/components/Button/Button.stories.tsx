import type { Meta, StoryObj } from "@storybook/react";

import CustomButton from "./Button";

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    label: "navigate",
    buttonType: "primary",
  },
};
