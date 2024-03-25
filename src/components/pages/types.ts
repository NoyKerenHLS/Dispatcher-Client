export type Scope = "top-headlines" | "everything";

export type TopHeadlinesFilters = {
  category: string;
  sourceCode: string;
  countryCode: string;
  q: string;
};

export type everythingFilters = {
  sortBy: string;
  sourceCode: string;
  languageCode: string;
  from: string;
  to: string;
  q: string;
};
