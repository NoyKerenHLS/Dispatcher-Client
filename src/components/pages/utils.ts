import { SetURLSearchParams } from "react-router-dom";
import { dropDownDataType } from "../dropdown/types";
import { SelectChangeEvent } from "@mui/material";

const handleCountrySelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;
  const scopeParam = searchParams.get("scope")!;
  const categoryParam = searchParams.get("category");
  if (categoryParam) {
    setSearchParam({
      scope: scopeParam,
      country: value,
      category: categoryParam,
    });
  } else {
    setSearchParam({ country: value });
  }
};

const handleCategorySelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;
  const countryParam = searchParams.get("country");
  if (countryParam) {
    setSearchParam({ country: countryParam, category: value });
  } else {
    setSearchParam({ category: value });
  }
};

const handleSourceSelect = (
  event: SelectChangeEvent,
  searchParams: URLSearchParams,
  setSearchParam: SetURLSearchParams
) => {
  const value = event.target.value;

  setSearchParam({ sources: value });
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

const countries = [
  { id: "1", item: "Argentina" },
  { id: "2", item: "Australia" },
  { id: "3", item: "Austria" },
  { id: "4", item: "Belgium" },
  { id: "5", item: "Brazil" },
  { id: "6", item: "Greece" },
  { id: "7", item: "Bulgaria" },
  { id: "8", item: "Canada" },
  { id: "9", item: "China" },
  { id: "10", item: "Colombia" },
  { id: "11", item: "Cuba" },
  { id: "12", item: "Egypt" },
  { id: "13", item: "Germany" },
  { id: "14", item: "Greece" },
  { id: "15", item: "Hungary" },
  { id: "16", item: "India" },
  { id: "17", item: "Indonesia" },
  { id: "18", item: "Indonesia" },
  { id: "19", item: "Ireland" },
  { id: "20", item: "Israel" },
  { id: "21", item: "Italy" },
  { id: "22", item: "Japan" },
  { id: "23", item: "Mexico" },
  { id: "24", item: "Netherlands" },
  { id: "25", item: "Norway" },
  { id: "26", item: "Poland" },
  { id: "27", item: "Russia" },
  { id: "28", item: "Romania" },
  { id: "29", item: "Turkey" },
  { id: "30", item: "Ukraine" },
  { id: "31", item: "UK" },
  { id: "32", item: "USA" },
];

export const headlinesDropDowns: dropDownDataType[] = [
  { label: "Country", items: countries, handleSelect: handleCountrySelect },
  { label: "Category", items: categories, handleSelect: handleCategorySelect },
  { label: "Sources", items: sources, handleSelect: handleSourceSelect },
];
