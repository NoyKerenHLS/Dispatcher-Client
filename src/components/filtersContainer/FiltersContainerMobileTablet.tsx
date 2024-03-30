import {
  IconButton,
  SelectChangeEvent,
  Stack,
  StackProps,
} from "@mui/material";
import { FC } from "react";
import { Colors } from "../../globalStyle/Colors";
import Dropdown from "../dropdown/Dropdown";
import FilterIcon from "../Icons/mobileTabletIcons/FilterIcon";
import { DropdownData, Item } from "../dropdown/types";

interface Props extends StackProps {
  dropDownsData: DropdownData[];
  handleSelect: (event: SelectChangeEvent, dropdownName: string) => void;
}

const FilterContainerMobileTablet: FC<Props> = ({
  dropDownsData,
  handleSelect,
  ...props
}) => {
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
        dropdownType="mobileTablet"
        label={dropDownsData[0].name}
        items={dropDownsData[0].items}
        handleSelect={handleSelect}
      />
      <IconButton>
        <FilterIcon />
      </IconButton>
    </Stack>
  );
};

export default FilterContainerMobileTablet;
