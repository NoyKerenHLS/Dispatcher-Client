import { Box } from "@mui/material";
import { FC, useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import { Colors } from "../../globalStyle/Colors";
import calenderIcon from "../Icons/datePicker/calenderIcon";
import { useSearchParams } from "react-router-dom";
import { DateRange } from "rsuite/esm/DateRangePicker";

interface IProps {
  //handleChange: (date: DateRange | null) => void;
}

const componentName: FC<IProps> = () => {
  const [searchParams, setSearchParam] = useSearchParams();
  const handleDtaeChange = (dateRange: DateRange | null) => {
    if (dateRange) {
      const startDateISO = dateRange[0].toISOString();
      const endDateISO = dateRange[1].toISOString();
      searchParams.set("from", startDateISO);
      searchParams.set("to", endDateISO);
      setSearchParam(searchParams);
    }
  };
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
        onChange={(date) => handleDtaeChange(date)}
      />
    </Box>
  );
};

export default componentName;
