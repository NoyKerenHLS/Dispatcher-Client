import { SelectChangeEvent } from "@mui/material";
import { SetURLSearchParams } from "react-router-dom";

export type AppDropDowns = "filter" | "autocomplete";

export type Item = { id: string; item: string };

export type dropDownDataType = {
  label: string;
  items: Item[];
  handleSelect: (
    event: SelectChangeEvent,
    searchParams: URLSearchParams,
    setSearchParam: SetURLSearchParams
  ) => void;
};
