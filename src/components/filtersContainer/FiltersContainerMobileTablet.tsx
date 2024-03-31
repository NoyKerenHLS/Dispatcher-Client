import {
  IconButton,
  SelectChangeEvent,
  Stack,
  StackProps,
} from "@mui/material";
import { FC, useState } from "react";
import { Colors } from "../../globalStyle/Colors";
import Dropdown from "../dropdown/Dropdown";
import FilterIcon from "../Icons/mobileTabletIcons/FilterIcon";
import { DropdownData, Item } from "../dropdown/types";
import FiltersMenu from "./FiltersMenu";
import { createParam, dropDownItems } from "../searchBar/utils";
import { useSearchParams } from "react-router-dom";

interface Props extends StackProps {
  dropDownsData: DropdownData[];
  handleSelect: (event: SelectChangeEvent, dropdownName: string) => void;
  isTopHeadlines: boolean;
}

const FilterContainerMobileTablet: FC<Props> = ({
  dropDownsData,
  handleSelect,
  isTopHeadlines,
  ...props
}) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScopeSelect = (event: SelectChangeEvent) => {
    const param = createParam(event.target.value);

    param === "top-headlines"
      ? setSearchParam({ scope: param, Country: "il" })
      : setSearchParam({ scope: param });
  };

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
        label="Top Headlines"
        items={dropDownItems}
        handleSelect={handleScopeSelect}
      />
      <IconButton onClick={handleClick}>
        <FilterIcon />
      </IconButton>
      <FiltersMenu
        handleClose={handleClose}
        handleSelect={handleSelect}
        anchorEl={anchorEl}
        dropDownsData={dropDownsData}
        isTopHeadlines={isTopHeadlines}
      />
    </Stack>
  );
};

export default FilterContainerMobileTablet;
