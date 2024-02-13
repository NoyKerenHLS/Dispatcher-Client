export type DropDownStyleProps = {
  width?: string;
  height?: string;
  borderRadius?: string;
  borderColor: string;
  bgcolor: string;
  px: string;
  color: string;
  fontSize: string;
  gap?: string;
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: string;
  };
  "& .MuiOutlinedInput-notchedOutline:not(:hover)": {
    border: string;
  };
  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input"?: {
    pr: string;
  };
};

export type DropDownType = {
  filter: DropDownStyleProps;
  autocomplete: DropDownStyleProps;
};

export type AppDropDowns = "filter" | "autocomplete";
