import axios from "axios";

export const getArticles = async ({
  pageParam,
  queryKey,
}: {
  pageParam: number;
  queryKey: any;
}) => {
  const [_key, scope, filters, pageSize] = queryKey;

  try {
    const { data } = await axios.get(
      `articles/db?scope=${scope}&filters=${filters}&page=${pageParam}&pageSize=${pageSize}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getSources = async () => {
  try {
    const { data } = await axios.get("articles/sources");
    return data;
  } catch (error) {
    return error;
  }
};
