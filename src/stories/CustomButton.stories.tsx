import type { Meta, StoryObj } from '@storybook/react';

import CustomButton from '../components/CustomButton';
import rightArrow from '../assets/rightArrow.svg'

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
};

export default meta;
type Story = StoryObj<typeof CustomButton>;

export const Primary: Story = {
  args: {
    children: "NAVIGAE",
    backgroundColor: "#0058B9",
    textColor: "#ffffff",
    icon: rightArrow,
    size: '14px'
  },
};