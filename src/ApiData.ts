import axios from "axios";

export type Scope = "topheadlines" | "everything";
const baseUrl = "https://newsapi.org/v2";
const API_KRY = "?apiKey=bb4c03f4a58741b3ade559261ef6a112";
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
  const filtersParam = filters.sources
    ? `&sources=${filters.sources}&q=${filters.q}`
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
  const filtersParam = filters.sources
    ? `&sources=${filters.sources}&q=${filters.q}`
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
