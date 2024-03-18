import { Box, SelectChangeEvent, Stack, StackProps } from "@mui/material";
import Autocomplete from "../autocomplete/Autocomplete";
import Dropdown from "../dropdown/Dropdown";
import { searchBarStlyle } from "./styles";
import { useSearchParams } from "react-router-dom";
import { Scope } from "../../ApiData";

interface Props extends StackProps {}

const SearchBar = ({ sx }: Props) => {
  const styledComb = { ...(sx ?? {}), ...searchBarStlyle };
  const [searchParams, setSearchParam] = useSearchParams();

  const dropDownItems = [
    { id: "top", item: "Top Headlines" },
    { id: "everything", item: "Eeverything" },
  ];

  if (!searchParams.get("scope")) {
    setSearchParam({ scope: "topHeadlines" });
  }

  const handleSelect = (event: SelectChangeEvent) => {
    const value = event.target.value;
    const scopeParam: Scope = value as Scope;

    setSearchParam({ scope: scopeParam });
  };

  const handleSearch = (value: string) => {};

  const recentSearches = ["soccer"];

  return (
    <Stack
      direction={"row"}
      sx={styledComb}
      divider={
        <Box
          height="40px"
          component="hr"
          sx={{ border: "0.75px solid #D9DBE9" }}
        />
      }
    >
      <Autocomplete
        options={recentSearches}
        handleSearch={handleSearch}
        itemListSx={{ width: "423px" }}
      ></Autocomplete>
      <Dropdown
        handleSelect={handleSelect}
        dropdownType="autocomplete"
        label="Top Headlines"
        items={dropDownItems}
      ></Dropdown>
    </Stack>
  );
};

export default SearchBar;
