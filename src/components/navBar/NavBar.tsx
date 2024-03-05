import { AppBar } from "@mui/material";
import LogoIcon from "../Icons/navBar/LogoIcon";
import Icon from "../Icons/Icon";
import SearchBar from "../searchBar/SearchBar";
import { logoStyle, navBarStyle, searchBarStyle } from "./styles";
import { Item } from "../dropdown/types";

const dropDownItems: Item[] = [
  { id: "top", item: "Top Headlines" },
  { id: "everything", item: "Eeverything" },
];

const recentSearches = ["soccer"]; // get from local storage

interface Props {
  dropDownLabel: string;
  handleSearch: (value: string) => void;
  logo?: React.ReactNode;
}

const NavBar = ({ dropDownLabel, handleSearch, logo }: Props) => {
  return (
    <AppBar sx={navBarStyle} component={"nav"}>
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
