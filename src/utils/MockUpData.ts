export const recentSearches = ["soccer", "football", "crypto", "israel"];
export const autocompleteDropDown = [
  { id: "top", item: "Top Headlines" },
  { id: "everything", item: "Eeverything" },
];

export const sourceDropDown = [
  { id: "1", item: "source 1" },
  { id: "2", item: "source 2" },
  { id: "3", item: "source 3" },
  { id: "4", item: "source 4" },
];

export const categoryDropDown = [
  { id: "1", item: "Sport" },
  { id: "2", item: "Finance" },
  { id: "3", item: "Entertainment" },
];

export const countryDropDown = [
  { id: "1", item: "Israel" },
  { id: "2", item: "USA" },
  { id: "3", item: "Germany" },
  { id: "4", item: "Netherlands" },
];

export const dropDownsData = [
  { label: "Sorces", items: sourceDropDown },
  { label: "Category", items: categoryDropDown },
  { label: "Country", items: countryDropDown },
];

export const handleSearch = (value: string) => {
  console.log(value);
};
