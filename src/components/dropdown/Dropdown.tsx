import { useState } from "react";
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { AppDropDowns, Item } from "./types";
import {
  dropDownStyles,
  menuItemStyle,
  menuDropDownStyle,
  menuPaperStyle,
  iconButtonStyle,
} from "./styles";
import ArrowIcon from "../Icons/dropDown/downArrowIcon";

interface Props extends SelectProps {
  label: string;
  items: Item[];
  dropdownType?: AppDropDowns;
  icon?: React.ReactNode;
  handleSelect: (value: string, dropdownName: string) => void;
}

const Dropdown = ({
  label,
  items,
  sx,
  dropdownType = "filter",
  icon,
  handleSelect,
}: Props) => {
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const styledComb = { ...(sx ?? {}), ...dropDownStyles[dropdownType] };
  const menuStyle = menuDropDownStyle[dropdownType];
  const fontWeight = dropdownType === "autocomplete" ? 500 : 400;

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
    handleSelect(event.target.value, label);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ArrowIconButton = () => {
    return (
      <IconButton sx={iconButtonStyle} onClick={handleOpen}>
        {icon ? icon : <ArrowIcon />}
      </IconButton>
    );
  };

  return (
    <Select
      displayEmpty
      value={selected}
      onChange={handleChange}
      renderValue={(selected) => {
        if (!selected) {
          return <p style={{ fontWeight: fontWeight }}>{label}</p>;
        }
        return <p style={{ fontWeight: fontWeight }}>{selected}</p>;
      }}
      IconComponent={ArrowIconButton}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      sx={styledComb}
      MenuProps={{
        PaperProps: {
          sx: menuPaperStyle,
        },
        sx: menuStyle,
      }}
    >
      {dropdownType === "filter" ? (
        <MenuItem sx={menuItemStyle} value={""}>
          <em>None</em>
        </MenuItem>
      ) : (
        ""
      )}
      {items.map((item) => (
        <MenuItem key={item.id} value={item.item} sx={menuItemStyle}>
          {item.item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
