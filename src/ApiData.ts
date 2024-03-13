import axios from "axios";

export const getTopHeadlinesArticles = async ({ queryKey }: any) => {
  const [_key, { countryCode, category, sources }] = queryKey;
  console.log(category);

  const topHeadLinesUrl = "https://newsapi.org/v2/top-headlines";
  const API_KRY = "&apiKey=57185ad1d6c848bd960890cd850014cb";
  var query = `?country=${countryCode}`;

  if (sources) {
    query = `?sources=${sources}`;
  } else if (category) {
    query = query + `&category=${category}`;
  }

  const url = topHeadLinesUrl + query + API_KRY;

  console.log(url);

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};
