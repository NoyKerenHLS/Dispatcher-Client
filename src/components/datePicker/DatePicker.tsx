import { Box } from "@mui/material";
import { FC } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import { Colors } from "../../globalStyle/Colors";
import calenderIcon from "../Icons/datePicker/calenderIcon";
import { DateRange } from "rsuite/esm/DateRangePicker";

interface IProps {
  handleChange: (date: DateRange | null) => void;
  handleClean: () => void;
}

const componentName: FC<IProps> = ({ handleChange, handleClean }) => {
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
        label="Date"
        placeholder=" "
        caretAs={calenderIcon}
        onChange={(date) => handleChange(date)}
        onClean={handleClean}
      />
    </Box>
  );
};

export default componentName;
