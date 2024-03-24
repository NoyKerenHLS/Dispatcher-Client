import { type SxProps } from "@mui/material";
import { type AppDropDowns } from "./types";
import { Colors } from "../../globalStyle/Colors";

const filterDropDown: SxProps = {
  height: "47px",
  width: "175px",
  borderRadius: "10px",
  borderColor: Colors.white,
  bgcolor: Colors.white,
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
      pr: { xs: "0px", md: "80px" },
    },
  "& .MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation8 MuiPopover-paper MuiMenu-paper MuiMenu-paper css-jkq4up-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
    {
      borderRadius: "20px",
    },
};

const autocompleteDropDown: SxProps = {
  height: "40px",
  borderColor: Colors.white,
  bgcolor: Colors.white,
  px: "5px",
  color: Colors.slateBlue,
  fontSize: "14px",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: Colors.white,
  },
  "& .MuiOutlinedInput-notchedOutline:not(:hover)": {
    border: "none",
  },
  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
    {
      pr: "5px",
    },
};

export const dropDownStyles: Record<AppDropDowns, SxProps> = {
  filter: filterDropDown,
  autocomplete: autocompleteDropDown,
};

const filterMenuStyle: SxProps = {
  maxHeight: "220px",
  marginTop: "6px",
};

const autoCompleteMenuStyle: SxProps = {
  maxHeight: "220px",
  marginTop: "12px",
};

export const menuDropDownStyle: Record<AppDropDowns, SxProps> = {
  filter: filterMenuStyle,
  autocomplete: autoCompleteMenuStyle,
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
  borderRadius: "10px",
};

export const menuItemStyle: SxProps = {
  color: "#5A5A89",
  fontSize: "12px",
  pl: "25px",
};

export const iconButtonStyle: SxProps = {
  "&:hover": { bgcolor: "white" },
};
