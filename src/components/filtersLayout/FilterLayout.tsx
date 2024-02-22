import { Stack } from "@mui/material";
import Dropdown from "../dropdown/Dropdown";
import { Item } from "../dropdown/types";
import { Colors } from "../../globalStyle/Colors";

interface Props {
  dropDownsData: { label: string; items: Item[] }[];
}

const FilterLayout = ({ dropDownsData }: Props) => {
  return (
    <Stack
      direction="row"
      height={67}
      borderBottom={1}
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
