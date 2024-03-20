import {
  Autocomplete as MuiAutocomplete,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Box,
  SxProps,
} from "@mui/material";
import SearchIcon from "../Icons/autocomplete/SearchIcon";
import XIcon from "../Icons/autocomplete/XIcon";

import {
  headLineStyle,
  listItemStyle,
  searchBarAutocompleteStyle,
} from "./styles";
import React, { useState } from "react";
import { Item } from "../dropdown/types";

interface Props {
  options: Item[];
  icon?: React.ReactNode;
  sx?: SxProps;
  itemListSx?: SxProps;
  handleSearch: (value: string) => void;
  handleClear: () => void;
  handleDeleteItem: (index: number) => void;
}

const Autocomplete = ({
  options,
  icon,
  sx,
  itemListSx,
  handleSearch,
  handleClear,
  handleDeleteItem,
}: Props) => {
  const headLine = { id: "-1", item: "Recent Searches" };
  const styledComb = { ...(sx ?? {}), ...searchBarAutocompleteStyle };

  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleSearch(inputValue);
  };

  return (
    <MuiAutocomplete
      sx={styledComb}
      freeSolo
      disableClearable
      options={[headLine, ...options]}
      onKeyDown={handleKeyDown}
      onInputChange={(event, value) => {
        setInputValue(value);
      }}
      PaperComponent={(props) => (
        <Paper {...props} sx={{ ...itemListSx, marginTop: "6px" }} />
      )}
      renderOption={(props, option) => (
        <Box key={option.id}>
          {option === headLine ? (
            <Box sx={headLineStyle}>
              <p>{option.item}</p>
              <p onClick={handleClear}>{"Clear"}</p>
            </Box>
          ) : (
            <li style={listItemStyle} {...props}>
              {option.item}
              <IconButton
                onClick={(event) => {
                  event.stopPropagation(),
                    handleDeleteItem(parseInt(option.id));
                }}
              >
                <XIcon />
              </IconButton>
            </li>
          )}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            sx: { fontSize: "14px" },
            type: "search",
            placeholder: "Search",
            startAdornment: (
              <InputAdornment position="start" sx={{ paddingLeft: "10px" }}>
                {icon ? icon : <SearchIcon />}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
