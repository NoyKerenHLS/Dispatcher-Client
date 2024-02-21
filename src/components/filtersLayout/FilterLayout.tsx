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
    >
      {dropDownsData.map((data, index) =>
        index === 0 ? (
          <Dropdown label={data.label} items={data.items}></Dropdown>
        ) : (
          <Dropdown
            label={data.label}
            items={data.items}
            sx={{ ml: "20px" }}
          ></Dropdown>
        )
      )}
    </Stack>
  );
};

export default FilterLayout;
