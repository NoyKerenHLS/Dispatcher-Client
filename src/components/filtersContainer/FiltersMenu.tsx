import { Divider, Menu, MenuItem, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import Dropdown from "../dropdown/Dropdown";
import { DropdownData } from "../dropdown/types";
import SearchBar from "../searchBar/SearchBar";
import { DateRange } from "rsuite/esm/DateRangePicker";
import { useSearchParams } from "react-router-dom";
import DatePicker from "../datePicker/DatePicker";

interface IProps {
  anchorEl: HTMLElement | null;
  dropDownsData: DropdownData[];
  handleSelect: (event: SelectChangeEvent, dropdownName: string) => void;
  handleClose: () => void;
  isTopHeadlines: boolean;
}

const FiltersMenu: FC<IProps> = ({
  anchorEl,
  handleSelect,
  handleClose,
  dropDownsData,
  isTopHeadlines,
}) => {
  const open = Boolean(anchorEl);
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

  const handleCleanDate = () => {
    searchParams.delete("from");
    searchParams.delete("to");
    setSearchParam(searchParams);
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem sx={{ display: { xs: "flex", sm: "none" } }}>
        <SearchBar dropDown={false} />
      </MenuItem>
      <Divider sx={{ display: { xs: "flex", sm: "none" } }} />
      <MenuItem>
        <Dropdown
          sx={{ width: "300px" }}
          dropdownType="mobileTablet"
          label={dropDownsData[0].name}
          items={dropDownsData[0].items}
          handleSelect={handleSelect}
        />
      </MenuItem>
      <Divider />
      <MenuItem>
        <Dropdown
          sx={{ width: "300px" }}
          label={dropDownsData[1].name}
          items={dropDownsData[1].items}
          handleSelect={handleSelect}
          dropdownType="mobileTablet"
        />
      </MenuItem>
      <Divider />{" "}
      <MenuItem>
        <Dropdown
          sx={{ width: "300px" }}
          label={dropDownsData[2].name}
          items={dropDownsData[2].items}
          handleSelect={handleSelect}
          dropdownType="mobileTablet"
        />
      </MenuItem>
    </Menu>
  );
};

export default FiltersMenu;
