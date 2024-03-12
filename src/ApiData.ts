import axios from "axios";

export const getArticles = async ({ queryKey }: any) => {
  const [_key, { countryCode }] = queryKey;

  try {
    const { data } = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=57185ad1d6c848bd960890cd850014cb`
    );
    return data;
  } catch (error) {
    return error;
  }
};
