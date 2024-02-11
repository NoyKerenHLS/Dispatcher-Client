import type { Meta, StoryObj } from "@storybook/react";

import CustomButton from "./CustomButton";
import { ButtonTypes } from "../../enums/ButtonTyps";

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    children: "navigate",
    withIcon: true,
    type: ButtonTypes.primary,
  },
};
