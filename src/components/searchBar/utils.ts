export const createParam = (value: string) => {
  switch (value) {
    case "Everything":
      return "everything";
    case "Top Headlines":
      return "top-headlines";
    default:
      return "top-headlines";
  }
};

export const dropDownItems = [
  { id: "top", item: "Top Headlines" },
  { id: "everything", item: "Everything" },
];

export const getNewSearches = (recentSearches: string[], value: string) => {
  const newSearches = recentSearches;
  const index = newSearches.indexOf(value);
  if (index !== -1) {
    newSearches.splice(index, 1);
  }

  newSearches.unshift(value);

  return newSearches;
};
