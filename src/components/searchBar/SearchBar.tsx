import { Box, Stack, StackProps } from "@mui/material";
import Autocomplete from "../autocomplete/Autocomplete";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import { searchBarStlyle } from "./styles";

interface Props extends StackProps {
  dropDownLabel: string;
  dropDownItems: Item[];
  recentSearches: string[];
  handleSearch: (value: string) => void;
}

const SearchBar = ({
  dropDownLabel,
  dropDownItems,
  recentSearches,
  handleSearch,
  sx,
}: Props) => {
  const styledComb = { ...(sx ?? {}), ...searchBarStlyle };

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
        dropdownType="autocomplete"
        label={dropDownLabel}
        items={dropDownItems}
      ></Dropdown>
    </Stack>
  );
};

export default SearchBar;
