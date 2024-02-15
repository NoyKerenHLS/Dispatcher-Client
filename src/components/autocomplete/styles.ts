import { Colors } from "../../globalStyle/Colors";
import { type SxProps } from "@mui/material";

export const searchBarAutocomplete: SxProps = {
  width: "300px",
  bgcolor: Colors.white,
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    border: "none",
    "& base-Popper-root MuiAutocomplete-popper css-1s5lphu-MuiPopper-root-MuiAutocomplete-popper'":
      {
        margin: "20px",
      },
  },
};

export const headLineStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  color: Colors.slateBlue,
  fontWeight: "700",
  paddingLeft: "16px",
  paddingRight: "18px",
};

export const listItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
  color: Colors.slateBlue,
};
