import { type SxProps } from "@mui/material";
import { type AppDropDowns } from "./types";

const filterDropDown: SxProps = {
  height: "47px",
  borderRadius: "10px",
  borderColor: "white", //color enum
  bgcolor: "white",
  px: "22.5px",
  color: "#5A5A89", //color enum
  fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-notchedOutline:not(:hover)": {
    border: "none",
  },
  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
    {
      pr: "80px",
    },
};

const autocompleteDropDown: SxProps = {
  height: "40px",
  borderColor: "white", //color enum
  bgcolor: "white",
  px: "15px",
  color: "#5A5A89", //color enum
  fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-notchedOutline:not(:hover)": {
    border: "none",
  },
};

export const dropDownStyles: Record<AppDropDowns, SxProps> = {
  filter: filterDropDown,
  autocomplete: autocompleteDropDown,
};

export const menuItemStyle = {
  color: "#5A5A89",
  fontSize: "12px",
  pl: "25px",
};
