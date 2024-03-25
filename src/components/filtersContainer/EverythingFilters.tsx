import { FC } from "react";
import { DropdownData } from "../dropdown/types";
import { SelectChangeEvent } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import DatePicker from "../datePicker/DatePicker";
import { DateRange } from "rsuite/esm/DateRangePicker";
import { useSearchParams } from "react-router-dom";

interface IProps {
  dropDownsData: DropdownData[];
  handleSelect: (event: SelectChangeEvent, dropdownName: string) => void;
}

const EverythingFilters: FC<IProps> = ({ dropDownsData, handleSelect }) => {
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
    <>
      <Dropdown
        key={dropDownsData[0].name}
        label={dropDownsData[0].name}
        items={dropDownsData[0].items}
        handleSelect={handleSelect}
      />
      <DatePicker
        handleChange={handleDtaeChange}
        handleClean={handleCleanDate}
      />
      <Dropdown
        key={dropDownsData[1].name}
        label={dropDownsData[1].name}
        items={dropDownsData[1].items}
        handleSelect={handleSelect}
      />
      <Dropdown
        key={dropDownsData[2].name}
        label={dropDownsData[2].name}
        items={dropDownsData[2].items}
        handleSelect={handleSelect}
      />
    </>
  );
};

export default EverythingFilters;
