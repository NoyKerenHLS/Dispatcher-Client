import { Box, Drawer, IconButton, Stack, StackProps } from "@mui/material";
import { FC, useState } from "react";
import { Colors } from "../../globalStyle/Colors";
import Dropdown from "../dropdown/Dropdown";
import FilterIcon from "../Icons/mobileTabletIcons/FilterIcon";
import { DropdownData } from "../dropdown/types";
import FiltersMenu from "./FiltersMenu";
import Button from "../button/Button";

interface Props extends StackProps {
  dropDownsData: DropdownData[];
  handleSelect: (value: string, dropdownName: string) => void;
  isTopHeadlines: boolean;
}

const FilterContainerMobileTablet: FC<Props> = ({
  dropDownsData,
  handleSelect,
  isTopHeadlines,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleClick = () => {
    toggleDrawer();
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
        label={dropDownsData[0].name}
        items={dropDownsData[0].items}
        handleSelect={handleSelect}
      />
      <IconButton onClick={toggleDrawer}>
        <FilterIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <FiltersMenu
          handleSelect={handleSelect}
          open={open}
          dropDownsData={dropDownsData}
          isTopHeadlines={isTopHeadlines}
        />
        <Box display="flex" height="100%" alignItems="end">
          <Box
            sx={{
              padding: "20px",
              backgroundColor: Colors.lightGray,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ pl: "48px" }}
              label="view results"
              onClick={handleClick}
            />
          </Box>
        </Box>
      </Drawer>
    </Stack>
  );
};

export default FilterContainerMobileTablet;
