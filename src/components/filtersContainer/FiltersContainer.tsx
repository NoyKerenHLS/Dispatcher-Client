import { Stack, StackProps } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { dropDownDataType } from "../dropdown/types";
import { Colors } from "../../globalStyle/Colors";
import { generateDropdownLabel } from "../pages/utils";
import { useSearchParams } from "react-router-dom";

interface Props extends StackProps {
  dropDownsData: dropDownDataType[];
}

const FilterContainer = ({ dropDownsData, ...props }: Props) => {
  const [searchParams, setSearchParam] = useSearchParams();
  return (
    <Stack
      {...props}
      direction="row"
      borderColor={Colors.lavenderGray}
      gap={"20px"}
    >
      {dropDownsData.map((dropDownData) => (
        <Dropdown
          key={dropDownData.label}
          label={generateDropdownLabel(dropDownData.label, searchParams)}
          items={dropDownData.items}
          handleSelect={dropDownData.handleSelect}
        />
      ))}
    </Stack>
  );
};

export default FilterContainer;
