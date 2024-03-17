import { SelectChangeEvent, Stack, StackProps } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { Item, dropDownDataType } from "../dropdown/types";
import { Colors } from "../../globalStyle/Colors";
import { SetURLSearchParams, useSearchParams } from "react-router-dom";

interface Props extends StackProps {
  dropDownsData: dropDownDataType[];
}

const FilterLayout = ({ dropDownsData, ...props }: Props) => {
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
          label={dropDownData.label}
          items={dropDownData.items}
          handleSelect={dropDownData.handleSelect}
        />
      ))}
    </Stack>
  );
};

export default FilterLayout;
