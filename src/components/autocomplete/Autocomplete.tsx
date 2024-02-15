import {
  Autocomplete as MuiAutocomplete,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import Icon from "../Icon/Icon";
import search from "../../assets/autocomplete/search.svg";
import XIcon from "../../assets/autocomplete/XIcon.svg";
import { headLineStyle, listItemStyle, searchBarAutocomplete } from "./styles";
import { useState } from "react";

interface Props {
  options: string[];
  icon?: string;
  handleSearch: (value: string) => void;
}

const Autocomplete = ({ options, icon = search, handleSearch }: Props) => {
  const headLine = "Recent Searches";
  const style = searchBarAutocomplete;

  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") handleSearch(inputValue);
  };

  return (
    <MuiAutocomplete
      sx={style}
      freeSolo
      disableClearable
      options={[headLine, ...options]}
      onKeyDown={handleKeyDown}
      onInputChange={(event, value) => {
        setInputValue(value);
      }}
      PaperComponent={(props) => <Paper {...props} sx={{ marginTop: "6px" }} />}
      renderOption={(props, option, index) => (
        <Box key={index + option}>
          {option === headLine ? (
            <Box sx={headLineStyle}>
              <p>{option}</p>
              <p onClick={() => console.log("clear clicked")}>{"Clear"}</p>
            </Box>
          ) : (
            <li style={listItemStyle} {...props}>
              {option}
              <IconButton
                onClick={(event) => {
                  event.stopPropagation(), console.log("X clicked");
                }}
              >
                <Icon iconImage={XIcon}></Icon>
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
              <InputAdornment position="start">
                <Icon iconImage={icon} style={{ paddingLeft: "10px" }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default Autocomplete;
