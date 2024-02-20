import type { Meta, StoryObj } from "@storybook/react";
import CustomDropDown from "./Dropdown";

const meta: Meta<typeof CustomDropDown> = {
  component: CustomDropDown,
};

export default meta;
type Story = StoryObj<typeof CustomDropDown>;

const items = [
  { id: "1", item: "item num 1" },
  { id: "2", item: "item num 2" },
  { id: "3", item: "item num 3" },
  { id: "4", item: "item num 4" },
];

export const Primary: Story = {
  args: {
    label: "Items",
    items: items,
    type: "filter",
  },
};
