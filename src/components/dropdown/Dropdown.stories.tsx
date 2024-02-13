import type { Meta, StoryObj } from "@storybook/react";
import CustomDropDown from "./Dropdown";

const meta: Meta<typeof CustomDropDown> = {
  component: CustomDropDown,
};

export default meta;
type Story = StoryObj<typeof CustomDropDown>;

const items = [
  "Item number 1",
  "Item number 2",
  "Item number 3",
  "Item number 4",
  "Item number 5",
  "Item number 6",
  "Item number 7",
  "Item number 8",
  "Item number 9",
  "Item number 10",
];

export const Primary: Story = {
  args: {
    label: "Items",
    items: items,
    type: "filter",
  },
};
