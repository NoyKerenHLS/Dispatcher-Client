import { Box, Stack, StackProps } from "@mui/material";
import Autocomplete from "../autocomplete/Autocomplete";
import Dropdown from "../dropdown/Dropdown";
import { searchBarStlyle } from "./styles";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import { createParam, dropDownItems, getNewSearches } from "./utils";
interface Props extends StackProps {
  dropDown?: boolean;
  width?: string;
}

const SearchBar = ({ sx, dropDown = true, width = "423px" }: Props) => {
  const styledComb = { ...(sx ?? {}), ...searchBarStlyle, width };
  const [searchParams, setSearchParam] = useSearchParams();
  const [recentSearches, setRecentSearches] = useLocalStorage<string[]>(
    "stored-searches",
    []
  );
  const [dropdownLabel, setDropdownLabel] = useState("Top Headlines");

  const scope = searchParams.get("scope");

  useEffect(() => {
    if (!scope) {
      setSearchParam({ scope: "top-headlines", Country: "il" });
    } else {
      const newDropdownLabel =
        scope === "top-headlines" ? "Top Headlines" : "Everything";
      setDropdownLabel(newDropdownLabel);
    }
  }, []);

  const handleSelect = (value: string) => {
    const param = createParam(value);

    param === "top-headlines"
      ? setSearchParam({ scope: param, Country: "il" })
      : setSearchParam({ scope: param });
  };

  const handleSearch = (value: string) => {
    searchParams.set("q", value);
    setSearchParam(searchParams);
    const storedSearches = getNewSearches(recentSearches, value);
    setRecentSearches(storedSearches);
  };

  const handleClear = () => {
    setRecentSearches([]);
  };

  const handleDeleteItem = (index: number) => {
    const newRecentSearches = recentSearches;
    newRecentSearches.splice(index, 1);

    setRecentSearches(newRecentSearches);
  };

  if (dropDown) {
    return (
      <Box display="flex" flexDirection="row" sx={styledComb}>
        <Autocomplete
          options={recentSearches}
          handleSearch={handleSearch}
          handleClear={handleClear}
          handleDeleteItem={handleDeleteItem}
          itemListSx={{ width: width }}
        ></Autocomplete>
      </Box>
    );
  }

  return (
    <Stack
      direction={"row"}
      sx={styledComb}
      divider={
        <Box
          height="40px"
          component="hr"
          sx={{
            border: "0.75px solid #D9DBE9",
          }}
        />
      }
    >
      <Autocomplete
        options={recentSearches}
        handleSearch={handleSearch}
        handleClear={handleClear}
        handleDeleteItem={handleDeleteItem}
        itemListSx={{ width: width }}
      ></Autocomplete>
      <Dropdown
        sx={{ display: { xs: "none", md: "flex" } }}
        handleSelect={handleSelect}
        dropdownType="autocomplete"
        label={dropdownLabel}
        items={dropDownItems}
      ></Dropdown>
    </Stack>
  );
};

export default SearchBar;
