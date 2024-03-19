import axios from "axios";

const baseUrl = "https://newsapi.org/v2";
const API_KRY = "?apiKey=1ab54f6161084c749f2dcd1a00f84f22";
const PAGE_SIZE = "20";

export const getTopHeadlinesArticles = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: any;
}) => {
  const [_key, filters] = queryKey;

  const filtersString = filters.sourceCode
    ? `%26sources=${filters.sourceCode}%26q=${filters.q}`
    : `%26country=${filters.countryCode}%26category=${filters.category}%26q=${filters.q}`;

  try {
    const { data } = await axios.get(
      `top-headlines?filters=${filtersString}&pageParam=${pageParam}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getEverytingArticles = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: any;
}) => {
  const [_key, filters] = queryKey;

  const filtersString = filters.sourceCode
    ? `%26sources=${filters.sourceCode}%26q=${filters.q}`
    : `%26sortBy=${filters.sortBy}%26language=${filters.languageCode}%26q=${filters.q}`;

  try {
    const { data } = await axios.get(
      `everything?filters=${filtersString}&pageParam=${pageParam}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getSources = async () => {
  try {
    const { data } = await axios.get("top-headlines/sources");
    return data;
  } catch (error) {
    return error;
  }
};
