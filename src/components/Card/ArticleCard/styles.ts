import { type SxProps } from "@mui/material";
import { Colors } from "../../../globalStyle/Colors";

export const articleCardStyle: SxProps = {
  height: { sx: "450px", sm: "242px" },
  maxWidth: "988px",
};

export const titleStyle: SxProps = {
  fontSize: "18px",
  fontWeight: "700",
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
