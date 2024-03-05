import { IconButton, Stack, StackProps } from "@mui/material";
import { FC } from "react";
import { Colors } from "../../globalStyle/Colors";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import FilterIcon from "../Icons/mobileTabletIcons/FilterIcon";

interface Props extends StackProps {
  dropDownData: Item[];
}

const FilterLayoutMobileTablet: FC<Props> = ({ dropDownData, ...props }) => {
  return (
    <Stack
      {...props}
      direction={"row"}
      sx={{
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "space-between",
        px: "8px",
        height: "44px",
        display: { xs: "flex", md: "none" },
      }}
    >
      <Dropdown
        sx={{
          "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            { pr: "20px" },
        }}
        label="Sort by"
        items={dropDownData}
      />
      <IconButton>
        <FilterIcon />
      </IconButton>
    </Stack>
  );
};

export default FilterLayoutMobileTablet;
