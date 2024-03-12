import { SelectChangeEvent, Stack, StackProps } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import { Colors } from "../../globalStyle/Colors";
import { useSearchParams } from "react-router-dom";

interface Props extends StackProps {
  dropDownsData: { label: string; items: Item[] }[];
}

const FilterLayout = ({ dropDownsData, ...props }: Props) => {
  const [searchParams, setSearchParam] = useSearchParams();

  const sources = [
    { id: "1", item: "source 1" },
    { id: "2", item: "source 2" },
    { id: "3", item: "source 3" },
    { id: "4", item: "source 4" },
  ];

  const categories = [
    { id: "1", item: "Sport" },
    { id: "2", item: "Finance" },
    { id: "3", item: "Entertainment" },
  ];

  const countries = [
    { id: "1", item: "Israel" },
    { id: "2", item: "USA" },
    { id: "3", item: "Greece" },
  ];

  const handleCountrySelect = (event: SelectChangeEvent) => {
    const value = event.target.value;

    setSearchParam({ country: value });
  };

  const handleSourceSelect = (event: SelectChangeEvent) => {};

  const handleCategorySelect = (event: SelectChangeEvent) => {};

  return (
    <Stack
      {...props}
      direction="row"
      borderColor={Colors.lavenderGray}
      gap={"20px"}
    >
      <Dropdown
        label="Sorces"
        items={sources}
        handleSelect={handleSourceSelect}
      />
      <Dropdown
        label="Category"
        items={categories}
        handleSelect={handleCategorySelect}
      />
      <Dropdown
        label="Country"
        items={countries}
        handleSelect={handleCountrySelect}
      />
    </Stack>
  );
};

export default FilterLayout;
