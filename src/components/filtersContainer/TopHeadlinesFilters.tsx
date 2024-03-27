import { FC } from "react";
import { DropdownData } from "../dropdown/types";
import Dropdown from "../dropdown/Dropdown";
import { SelectChangeEvent } from "@mui/material";

interface IProps {
  dropDownsData: DropdownData[];
  handleSelect: (event: SelectChangeEvent, dropdownName: string) => void;
}

const TopHeadlinesFilters: FC<IProps> = ({ dropDownsData, handleSelect }) => {
  return (
    <>
      {dropDownsData.map((dropdown) => (
        <Dropdown
          key={dropdown.name}
          label={dropdown.name}
          items={dropdown.items}
          handleSelect={handleSelect}
        />
      ))}
    </>
  );
};

export default TopHeadlinesFilters;