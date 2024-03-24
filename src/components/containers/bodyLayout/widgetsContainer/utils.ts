import { LineChartData } from "../../../chart/lineChart/types";
import { PieChartData } from "../../../chart/pieChart/types";
import { Article } from "../articlesContainer/type";

export const createPieDataArr = (articles: Article[]) => {
  const sourceCounts: PieChartData[] = [];

  articles.forEach((article) => {
    const existingSourceCountIndex = sourceCounts.findIndex(
      (sc) => sc.name === article.source.name
    );
    if (existingSourceCountIndex !== -1) {
      sourceCounts[existingSourceCountIndex].value++;
    } else {
      sourceCounts.push({ name: article.source.name, value: 1 });
    }
  });

  return sourceCounts;
};

export const createLineDataArr = (articles: Article[]) => {
  const monthCounts: LineChartData[] = [];

  articles.forEach((article) => {
    const monthName = getMonthName(article.publishedAt);

    const existingMonthCountIndex = monthCounts.findIndex(
      (mc) => mc.name === monthName
    );
    if (existingMonthCountIndex !== -1) {
      monthCounts[existingMonthCountIndex].value++;
    } else {
      monthCounts.push({ name: monthName, value: 1 });
    }
  });

  return monthCounts;
};

const getMonthName = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { month: "long" };
  const fullMonthName = date.toLocaleDateString("en-US", options);
  return fullMonthName.substring(0, 3);
};
