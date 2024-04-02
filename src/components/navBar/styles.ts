import { Colors } from "../../globalStyle/Colors";

export const APP_BAR_HEIGHT = "80px";

export const navBarStyle = {
  backgroundColor: Colors.midnightBlue,
  display: "flex",
  flexDirection: "row",
  height: APP_BAR_HEIGHT,
};

export const searchBarStyle = {
  display: { xs: "none", sm: "flex" },
  height: "50px",
  alignSelf: "center",
  ml: { sm: "51px", md: "154px" },
  width: "423px",
};

export const logoStyle = { py: "12px", pl: "25px" };
