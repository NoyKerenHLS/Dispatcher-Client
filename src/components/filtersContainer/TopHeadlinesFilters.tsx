import { FC } from "react";
import { DropdownData } from "../dropdown/types";
import Dropdown from "../dropdown/Dropdown";

interface IProps {
  dropDownsData: DropdownData[];
  handleSelect: (value: string, dropdownName: string) => void;
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
