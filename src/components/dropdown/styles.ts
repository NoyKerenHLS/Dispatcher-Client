import { type SxProps } from "@mui/material";
import { type AppDropDowns } from "./types";
import { Colors } from "../../globalStyle/Colors";

const filterDropDown: SxProps = {
  height: "47px",
  borderRadius: "10px",
  borderColor: Colors.white,
  bgcolor: Colors.white,
  px: "22.5px",
  color: Colors.slateBlue, //color enum
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
  borderColor: Colors.white,
  bgcolor: Colors.white,
  px: "15px",
  color: Colors.slateBlue,
  fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: Colors.white,
  },
  "& .MuiOutlinedInput-notchedOutline:not(:hover)": {
    border: "none",
  },
};

export const dropDownStyles: Record<AppDropDowns, SxProps> = {
  filter: filterDropDown,
  autocomplete: autocompleteDropDown,
};

export const menuStyle: SxProps = {
  maxHeight: "220px",
  marginTop: "6px",
};

export const menuPaperStyle: SxProps = {
  "&::-webkit-scrollbar": {
    width: "3px",
  },
  "&::-webkit-scrollbar-track": {
    "-webkit-box-shadow": "",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: Colors.slateBlue,
    borderRadius: "10px",
  },
};

export const menuItemStyle: SxProps = {
  color: "#5A5A89",
  fontSize: "12px",
  pl: "25px",
};
