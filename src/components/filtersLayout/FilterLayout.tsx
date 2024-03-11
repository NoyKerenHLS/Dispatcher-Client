import { Hidden, Stack, StackProps } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import { Colors } from "../../globalStyle/Colors";

interface Props extends StackProps {
  dropDownsData: { label: string; items: Item[] }[];
}

const FilterLayout = ({ dropDownsData, ...props }: Props) => {
  return (
    <Stack
      {...props}
      direction="row"
      borderColor={Colors.lavenderGray}
      gap={"20px"}
    >
      {dropDownsData.map((data) => (
        <Dropdown
          key={data.label}
          label={data.label}
          items={data.items}
        ></Dropdown>
      ))}
    </Stack>
  );
};

export default FilterLayout;
