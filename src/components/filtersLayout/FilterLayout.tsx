import { SelectChangeEvent, Stack, StackProps } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import { Colors } from "../../globalStyle/Colors";
import { useSearchParams } from "react-router-dom";
import { categories, countries, sources } from "../pages/utils";

interface Props extends StackProps {
  dropDownsData: { label: string; items: Item[] }[];
}

const FilterLayout = ({ dropDownsData, ...props }: Props) => {
  const [searchParams, setSearchParam] = useSearchParams();

  const handleCountrySelect = (event: SelectChangeEvent) => {
    const value = event.target.value;
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSearchParam({ country: value, category: categoryParam });
    } else {
      setSearchParam({ country: value });
    }
  };

  const handleCategorySelect = (event: SelectChangeEvent) => {
    const value = event.target.value;
    const countryParam = searchParams.get("country");
    if (countryParam) {
      setSearchParam({ country: countryParam, category: value });
    } else {
      setSearchParam({ category: value });
    }
  };

  const handleSourceSelect = (event: SelectChangeEvent) => {
    const value = event.target.value;

    setSearchParam({ sources: value });
  };

  return (
    <Stack
      {...props}
      direction="row"
      borderColor={Colors.lavenderGray}
      gap={"20px"}
    >
      <Dropdown
        label="Country"
        items={countries}
        handleSelect={handleCountrySelect}
      />
      <Dropdown
        label="Category"
        items={categories}
        handleSelect={handleCategorySelect}
      />
      <Dropdown
        label="Sorces"
        items={sources}
        handleSelect={handleSourceSelect}
      />
    </Stack>
  );
};

export default FilterLayout;
