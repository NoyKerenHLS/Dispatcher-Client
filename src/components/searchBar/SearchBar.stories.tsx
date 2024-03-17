import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";
import { Item } from "../dropdown/types";

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

const dropDownItems: Item[] = [
  { id: "top", item: "Top Headlines" },
  { id: "everything", item: "Eeverything" },
];

const recentSearches = ["soccer"];

export const Primary: Story = {
  args: {},
};
