import type { Meta, StoryObj } from "@storybook/react";

import Autocomplete from "./Autocomplete";

const meta: Meta<typeof Autocomplete> = {
  component: Autocomplete,
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const options = ["crypto", "soccer", "israel"];

export const Primary: Story = {
  args: {
    options: options,
  },
};
