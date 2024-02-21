import { type SxProps } from "@mui/material";
import { Colors } from "../../../globalStyle/Colors";

export const articleCardStyle: SxProps = {
  height: { sx: "450px", sm: "242px" },
  width: { sx: "343px", sm: "728px", md: "988px" },
};

export const titleStyle: SxProps = {
  fontSize: "18px",
  fontWeight: "700",
  maxWidth: "470px",
  pr: "inherit",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};

export const descriptiontStyle: SxProps = {
  fontSize: "14px",
  color: Colors.slateBlue,
  pr: "inherit",
  lineHeight: "17px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
};

export const commentStyle: SxProps = {
  fontSize: "14px",
  color: "rgba(90, 90, 137, 0.5)",
};
