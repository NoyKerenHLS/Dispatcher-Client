import { AppButtons } from "./types";
import { Colors } from "../../globalStyle/Colors";
import { type SxProps } from "@mui/material";

const primaryButton: SxProps = {
  bgcolor: Colors.royalBlue,
  borderRadius: "20px",
  color: Colors.white,
  pl: "20px",
  pr: "20px",
  fontSize: "14px",
};

const secondaryButton: SxProps = {
  bgcolor: Colors.lavenderGray,
  borderRadius: "20px",
  color: Colors.slateBlue,
  pl: "20px",
  pr: "20px",
  fontSize: "14px",
};

const textButton: SxProps = {
  bgcolor: Colors.white,
  borderRadius: "20px",
  color: Colors.slateBlue,
  pl: "20px",
  pr: "20px",
  fontSize: "14px",
};

export const buttonStyles: Record<AppButtons, SxProps> = {
  primary: primaryButton,
  secondary: secondaryButton,
  text: textButton,
};
