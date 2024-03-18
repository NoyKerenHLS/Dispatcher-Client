import { SetURLSearchParams } from "react-router-dom";
import { dropDownDataType } from "../dropdown/types";
import { SelectChangeEvent } from "@mui/material";
import { Scope } from "../../ApiData";

const handleCountrySelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;

  searchParams.set("country", value);
  setSearchParam(searchParams);
};

const handleCategorySelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;

  searchParams.set("category", value);
  setSearchParam(searchParams);
};

const handleSourceSelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;

  const scope: Scope = searchParams.get("scope") as Scope;
  setSearchParam({ scope: scope, sources: value });
};

const handleSortBySelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;
  const sort = value.replace(/[ \t\r\n]/g, "");

  searchParams.set("sortBy", sort);
  setSearchParam(searchParams);
};

const handleLanguageSelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;

  searchParams.set("language", value);
  setSearchParam(searchParams);
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

const sources = [{ id: "1", item: "bbc-news" }];

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

export const headlinesDropDowns: dropDownDataType[] = [
  { label: "Country", items: countries, handleSelect: handleCountrySelect },
  { label: "Category", items: categories, handleSelect: handleCategorySelect },
  { label: "Sources", items: sources, handleSelect: handleSourceSelect },
];

export const everythingDropDowns: dropDownDataType[] = [
  { label: "Sort By", items: sortBy, handleSelect: handleSortBySelect },
  { label: "Sources", items: sources, handleSelect: handleSourceSelect },
  { label: "Language", items: languages, handleSelect: handleLanguageSelect },
];
