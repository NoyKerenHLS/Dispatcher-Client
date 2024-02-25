import { Box, Stack, StackProps } from "@mui/material";
import React, { FC } from "react";
import { Colors } from "../../globalStyle/Colors";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import { Filter } from "@mui/icons-material";
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
        height: "50px",
        display: { xs: "flex", md: "none" },
      }}
    >
      <Dropdown label="Sort by" items={dropDownData}></Dropdown>
      <FilterIcon />
    </Stack>
  );
};

export default FilterLayoutMobileTablet;
