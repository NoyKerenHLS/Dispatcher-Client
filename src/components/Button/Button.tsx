import { Button as MuiButton, ButtonProps } from "@mui/material/";
import { buttonStyles } from "./styles";
import { AppButtons } from "./types";
import Icon from "../Icons/button/RightArrowIcon";
import React from "react";

interface Props extends ButtonProps {
  label: string;
  icon?: React.ReactNode;
  buttonType?: AppButtons;
}

const Button = ({
  label,
  buttonType = "primary",
  icon,
  sx,
  ...props
}: Props) => {
  const buttonStyle = buttonStyles[buttonType];
  const styledComb = { ...(sx ?? {}), ...buttonStyle };
  const variant = buttonType === "primary" ? "contained" : "text";

  return (
    <MuiButton
      {...props}
      variant={variant}
      sx={styledComb}
      endIcon={icon ? icon : <Icon />}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
