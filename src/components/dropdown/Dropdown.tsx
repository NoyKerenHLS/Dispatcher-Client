import { useState } from "react";
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import { AppDropDowns } from "./types";
import {
  dropDownStyles,
  menuItemStyle,
  menuStyle,
  menuPaperStyle,
} from "./styles";
import dropdownArrow from "../../assets/Dropdown/dropdownArrow.svg";
import Icon from "../Icon/Icon";

interface Props extends SelectProps {
  label: string;
  items: string[];
  dropdownType?: AppDropDowns;
  icon?: string;
}

const Dropdown = ({
  label,
  items,
  dropdownType = "filter",
  icon = dropdownArrow,
}: Props) => {
  const [chosenItem, setChosenItem] = useState("");
  const [open, setOpen] = useState(false);

  const style = dropDownStyles[dropdownType];
  const fontWeight = dropdownType === "autocomplete" ? "bold" : "unset";

  const handleChange = (event: SelectChangeEvent) => {
    setChosenItem(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ArrowIconButton = () => {
    return (
      <IconButton sx={{ "&:hover": { bgcolor: "white" } }} onClick={handleOpen}>
        <Icon iconImage={icon} />
      </IconButton>
    );
  };

  return (
    <Select
      displayEmpty
      value={chosenItem}
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
        <MenuItem key={item} value={item} sx={menuItemStyle}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default Dropdown;
