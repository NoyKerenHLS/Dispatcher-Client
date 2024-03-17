import axios from "axios";

export type Pages = "Headlines" | "Everything";
const baseUrl = "https://newsapi.org/v2";
const API_KRY = "?apiKey=da77a58986be4a1c8de3119abcf1b937";
const PAGE_SIZE = "20";

// export const getArticles = async (
//   page: Pages,
//   { pageParam, queryKey }: any
// ) => {
//   page === "Headlines"
//     ? getTopHeadlinesArticles({ pageParam, queryKey })
//     : getEverytingArticles({ pageParam, queryKey });
// };

export const getTopHeadlinesArticles = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: any;
}) => {
  const [_key, filters] = queryKey;

  const pageEndpoint = "/top-headlines";
  const filtersParam = `&country=${filters.countryCode}&sources=${filters.sources}&category=${filters.category}`;
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

// export const getEverytingArticles = async ({ pageParam, queryKey }: any) => {};
