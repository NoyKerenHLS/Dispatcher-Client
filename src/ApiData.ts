import axios from "axios";

export type Scope = "topheadlines" | "everything";
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

  const pageEndpoint = "/top-headlines";
  const filtersParam = filters.sourceCode
    ? `&sources=${filters.sourceCode}&q=${filters.q}`
    : `&country=${filters.countryCode}&category=${filters.category}&q=${filters.q}`;
  const pageFetchingParam = `&page=${pageParam}&pageSize=${PAGE_SIZE}`;

  const url =
    baseUrl + pageEndpoint + API_KRY + filtersParam + pageFetchingParam;

  console.log(url);

  try {
    const { data } = await axios.get(url);
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

  const pageEndpoint = "/everything";
  const filtersParam = filters.sourceCode
    ? `&sources=${filters.sourceCode}&q=${filters.q}`
    : `&sortBy=${filters.sortBy}&language=${filters.languageCode}&q=${filters.q}`; //TODO add date and q
  const pageFetchingParam = `&page=${pageParam}&pageSize=${PAGE_SIZE}`;

  const url =
    baseUrl + pageEndpoint + API_KRY + filtersParam + pageFetchingParam;

  console.log(url);

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};

export const getSources = async () => {
  const url = "https://newsapi.org/v2/top-headlines/sources" + API_KRY;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};
