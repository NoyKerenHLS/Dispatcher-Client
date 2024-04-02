export type Scope = "topheadlines" | "everything";

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
  date: string; // Date?
  q: string;
};
