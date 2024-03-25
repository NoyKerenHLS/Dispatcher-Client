import { LineChartData } from "../../../chart/lineChart/types";
import { PieChartData } from "../../../chart/pieChart/types";
import { Article } from "../articlesContainer/type";

export const createPieDataArr = (articles: Article[]) => {
  const sourceCounts: { [key: string]: number } = {};

  articles.forEach((article) =>
    sourceCounts[article.source.name]
      ? (sourceCounts[article.source.name] = +1)
      : (sourceCounts[article.source.name] = 1)
  );

  const sourcesAmount: PieChartData[] = Object.entries(sourceCounts).map(
    ([key, value]) => ({
      name: key,
      value: value,
    })
  );

  return sourcesAmount;
};

export const createLineDataArr = (articles: Article[]) => {
  const monthCounts: { [key: string]: number } = {};

  articles.forEach((article) => {
    const monthName = getMonthName(article.publishedAt);

    monthCounts[monthName]
      ? (monthCounts[monthName] = +1)
      : (monthCounts[monthName] = 1);
  });

  const monthAmount: LineChartData[] = Object.entries(monthCounts).map(
    ([key, value]) => ({
      name: key,
      value: value,
    })
  );

  return monthAmount;
};

const getMonthName = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: "long" };
  const fullMonthName = date.toLocaleDateString("en-US", options);
  return fullMonthName.substring(0, 3);
};
