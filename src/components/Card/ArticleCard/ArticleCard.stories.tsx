import type { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard";

const data = {
  source: {
    id: "1",
    name: "Axios",
  },
  author: "Axios",
  title: "What to know about Yulia Navalnaya, widow of Alexei Navalny - Axios",
  description: null,
  url: "https://www.axios.com/2024/02/20/yulia-navalnaya-alexei-navalny-russia-opposition-leader",
  urlToImage: null,
  publishedAt: "2024-02-21T08:17:22Z",
  content: null,
};

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Primary: Story = {
  args: {
    data: data,
  },
};
