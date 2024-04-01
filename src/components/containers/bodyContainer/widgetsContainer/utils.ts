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
  const dayCount: { [key: string]: number } = {
    Sunday: 0,
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
  };

  articles.forEach((article) => {
    const date = new Date(article.publishedAt);
    const dayOfWeek = date.getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = daysOfWeek[dayOfWeek];

    dayCount[dayName] = +1;
  });

  const daysAmount: LineChartData[] = Object.entries(dayCount).map(
    ([key, value]) => ({
      name: key,
      value: value,
    })
  );

  return daysAmount;
};
