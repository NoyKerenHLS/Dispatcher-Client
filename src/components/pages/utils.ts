import { SelectChangeEvent } from "@mui/material";
import { ApiData } from "../card/articleCard/types";
import { Source } from "../filtersContainer/types";

export const landingLabel = "Top Headlines In Israel";

export const createFilters = (params: [string, string][]) => {
  let filters = "";

  if (params.length !== 0) {
    params.map((param) => {
      filters += `%26${param[0]}=${param[1]}`;
    });

    return filters;
  }

  return "%26Country=il";
};

export const createParam = (
  event: SelectChangeEvent,
  dropdownName: string,
  sourcesCodes?: { [key: string]: string }
) => {
  let value = "";
  const name = dropdownName.replace(/[ \t\r\n]/g, "");

  switch (dropdownName) {
    case "Sources":
      value = sourcesCodes
        ? sourcesCodes[event.target.value as keyof typeof sourcesCodes]
        : "";
      break;
    case "Language":
      value = languageCodes[event.target.value as keyof typeof languageCodes];
      break;
    case "Country":
      value = countryCodes[event.target.value as keyof typeof countryCodes];
      break;

    default:
      value = event.target.value.replace(/[ \t\r\n]/g, "");
      break;
  }

  return { name, value };
};

export const countryCodes = {
  Argentina: "ar",
  Australia: "au",
  Austria: "at",
  Belgium: "be",
  Brazil: "br",
  Bulgaria: "bg",
  Canada: "ca",
  China: "cn",
  Colombia: "co",
  Cuba: "cu",
  Egypt: "eg",
  Germany: "de",
  Greece: "gr",
  Hungary: "hu",
  India: "in",
  Indonesia: "id",
  Ireland: "ie",
  Israel: "il",
  Italy: "il",
  Japan: "jp",
  Mexico: "mx",
  Netherlands: "nl",
  Norway: "no",
  Poland: "pl",
  Russia: "ru",
  Romania: "ro",
  Turkey: "tr",
  Ukraine: "ua",
  UK: "gb",
  USA: "us",
};

export const languageCodes = {
  Arabic: "ar",
  German: "de",
  English: "en",
  Spanish: "es",
  French: "fr",
  Hebrew: "he",
  Italian: "it",
  Dutch: "nl",
  Norwegian: "no",
  Portuguese: "pt",
  Russian: "ru",
  Swedish: "sv",
  Undefined: "ud",
  Chinese: "zh",
};

const languages = Object.entries(languageCodes).map(([language], index) => ({
  id: (index + 1).toString(),
  item: language,
}));

export const createSourcesCoedes = (sources: Source[]) => {
  let sourcesCodes: { [key: string]: string } = {};

  sources.forEach((source: Source) => {
    sourcesCodes[source.name] = source.id;
  });

  return sourcesCodes;
};

const categories = [
  { id: "1", item: "business" },
  { id: "2", item: "entertainment" },
  { id: "3", item: "health" },
  { id: "4", item: "general" },
  { id: "5", item: "science" },
  { id: "6", item: "sports" },
  { id: "7", item: "technology" },
];

const countries = Object.entries(countryCodes).map(([country], index) => ({
  id: (index + 1).toString(),
  item: country,
}));

const sortBy = [
  { id: "1", item: "relevancy" },
  { id: "2", item: "popularity" },
  { id: "3", item: "published at" },
];

export const getArticlesFromPage = (pages: any[]) => {
  return pages.flatMap<ApiData["articles"][0]>((page) => page.articles);
};

export const headlinesDropDowns = [
  { name: "Country", items: countries },
  { name: "Category", items: categories },
  { name: "Sources", items: [] },
];

export const everythingDropDowns = [
  { name: "Sort By", items: sortBy },
  { name: "Sources", items: [] },
  { name: "Language", items: languages },
];

export const dropdowns = {
  everything: everythingDropDowns,
  "top-headlines": headlinesDropDowns,
};
