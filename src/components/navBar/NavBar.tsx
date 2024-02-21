import { AppBar } from "@mui/material";
import LogoIcon from "../Icons/navBar/LogoIcon";
import Icon from "../Icons/Icon";
import SearchBar from "../searchBar/SearchBar";
import { Item } from "../dropdown/types";
import { logoStyle, navBarStyle, searchBarStyle } from "./styles";

interface Props {
  dropDownLabel: string;
  dropDownItems: Item[];
  recentSearches: string[];
  handleSearch: (value: string) => void;
  logo?: React.ReactNode;
}

const NavBar = ({
  dropDownLabel,
  dropDownItems,
  recentSearches,
  handleSearch,
  logo,
}: Props) => {
  return (
    <AppBar sx={navBarStyle}>
      <Icon sx={logoStyle}>{logo ? logo : <LogoIcon />}</Icon>
      <SearchBar
        dropDownLabel={dropDownLabel}
        dropDownItems={dropDownItems}
        recentSearches={recentSearches}
        handleSearch={handleSearch}
        sx={searchBarStyle}
      ></SearchBar>
    </AppBar>
  );
};

export default NavBar;
