import { AppBar } from "@mui/material";
import LogoIcon from "../Icons/navBar/LogoIcon";
import Icon from "../Icons/Icon";
import SearchBar from "../searchBar/SearchBar";
import { logoStyle, navBarStyle, searchBarStyle } from "./styles";

interface Props {
  logo?: React.ReactNode;
}

const NavBar = ({ logo }: Props) => {
  return (
    <AppBar sx={navBarStyle} component={"nav"}>
      <Icon sx={logoStyle}>{logo ? logo : <LogoIcon />}</Icon>
      <SearchBar sx={searchBarStyle}></SearchBar>
    </AppBar>
  );
};

export default NavBar;
