import { Box } from "@mui/material";
import { FC, useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import { Colors } from "../../globalStyle/Colors";
import calenderIcon from "../Icons/datePicker/calenderIcon";
import { useSearchParams } from "react-router-dom";
import { DateRange } from "rsuite/esm/DateRangePicker";

interface IProps {
  handleChange: (date: DateRange | null) => void;
}

const componentName: FC<IProps> = ({ handleChange }) => {
  return (
    <Box
      sx={{
        height: "47px",
        background: Colors.white,
        borderRadius: "10px",
        display: "flex",
      }}
    >
      <DateRangePicker
        style={{ width: "175px", alignSelf: "center" }}
        placeholder="Date"
        caretAs={calenderIcon}
        onChange={(date) => handleChange(date)}
      />
    </Box>
  );
};

export default componentName;
