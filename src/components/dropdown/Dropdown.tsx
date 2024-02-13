import { useState } from "react";
import { IconButton, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { AppDropDowns } from "./types";
import { dropDownStyles, menuItemStyle } from "./styles";

interface Props {
  label: string;
  items: string[];
  type?: AppDropDowns;
}

const Dropdown = ({ label, items, type = "filter" }: Props) => {
  const [chosenItem, setChosenItem] = useState("");
  const [open, setOpen] = useState(false);

  const style = dropDownStyles[type];
  const fontWeight = type === "autocomplete" ? "bold" : "unset";

  const handleChange = (event: SelectChangeEvent) => {
    setChosenItem(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //TODO icon instand of img
  const ArrowIconButton = () => {
    return (
      <IconButton sx={{ "&:hover": { bgcolor: "white" } }} onClick={handleOpen}>
        {/* <img src={dropdownArrow} alt="dropdownArrow" /> */}
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
        sx: {
          maxHeight: "300px",
          marginTop: "6px",
        },
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
