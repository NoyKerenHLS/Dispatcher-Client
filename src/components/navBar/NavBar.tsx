import { AppBar, Box, Divider, Drawer, IconButton } from "@mui/material";
import LogoIcon from "../Icons/navBar/LogoIcon";
import Icon from "../Icons/Icon";
import SearchBar from "../searchBar/SearchBar";
import { logoStyle, navBarStyle, searchBarStyle } from "./styles";
import SearchIcon from "../Icons/navBar/SearchIcon";
import { useState } from "react";
import Button from "../button/Button";
import { Colors } from "../../globalStyle/Colors";

interface Props {
  logo?: React.ReactNode;
}

const NavBar = ({ logo }: Props) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <AppBar sx={navBarStyle} component={"nav"}>
      <Icon sx={logoStyle}>{logo ? logo : <LogoIcon />}</Icon>
      <SearchBar sx={searchBarStyle}></SearchBar>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100%",
          justifyContent: "flex-end",
          pr: "10px",
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <SearchIcon />
        </IconButton>
        <Drawer
          anchor="right"
          sx={{ backgroundColor: Colors.lightGray }}
          open={open}
          onClose={toggleDrawer}
        >
          <SearchBar width="300px" />
          <Divider />
          <Box
            sx={{ backgroundColor: Colors.lightGray }}
            display="flex"
            height="100%"
            alignItems="end"
          >
            <Box
              sx={{
                padding: "20px",
                backgroundColor: Colors.lightGray,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{ pl: "48px" }}
                label="view results"
                onClick={toggleDrawer}
              />
            </Box>
          </Box>
        </Drawer>
      </Box>
    </AppBar>
  );
};

export default NavBar;
