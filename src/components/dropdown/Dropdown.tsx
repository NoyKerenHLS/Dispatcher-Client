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
  menuStyle,
  menuPaperStyle,
  iconButtonStyle,
} from "./styles";
import dropdownArrow from "../../assets/Dropdown/dropdownArrow.svg";
import Icon from "../Icon/Icon";

interface Props extends SelectProps {
  label: string;
  items: Item[];
  dropdownType?: AppDropDowns;
  icon?: string;
}

const Dropdown = ({
  label,
  items,
  dropdownType = "filter",
  icon = dropdownArrow,
}: Props) => {
  const [selected, setSelected] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  const style = dropDownStyles[dropdownType];
  const fontWeight = dropdownType === "autocomplete" ? "bold" : "unset";

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value);
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
        <Icon iconImage={icon} />
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
        return selected;
      }}
      IconComponent={ArrowIconButton}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      sx={style}
      MenuProps={{
        PaperProps: {
          sx: menuPaperStyle,
        },
        sx: menuStyle,
      }}
    >
      {items.map((item) => (
        <MenuItem key={item.id} value={item.item} sx={menuItemStyle}>
          {item.item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
