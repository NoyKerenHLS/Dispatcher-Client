import { ButtonType, ButtonStyleProp } from "./types";
import { Colors } from "../../globalStyle/Colors";

const primaryButton: ButtonStyleProp = {
  bgcolor: Colors.royalBlue,
  borderRadius: "20px",
  color: Colors.white,
  pl: "20px",
  pr: "20px",
  fontSize: "14px",
};

const secondaryButton: ButtonStyleProp = {
  bgcolor: Colors.lavenderGray,
  borderRadius: "20px",
  color: Colors.slateBlue,
  pl: "20px",
  pr: "20px",
  fontSize: "14px",
};

const textButton: ButtonStyleProp = {
  bgcolor: Colors.white,
  borderRadius: "20px",
  color: Colors.slateBlue,
  pl: "20px",
  pr: "20px",
  fontSize: "14px",
};

export const buttonStyles: ButtonType = {
  primary: primaryButton,
  secondary: secondaryButton,
  text: textButton,
};
