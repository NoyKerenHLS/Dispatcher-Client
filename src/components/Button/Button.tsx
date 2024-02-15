import { Button as MuiButton, ButtonProps } from "@mui/material/";
import rightArrow from "../../assets/Button/rightArrow.svg";
import { buttonStyles } from "./styles";
import { AppButtons } from "./types";
import Icon from "../Icon/Icon";

interface Props extends ButtonProps {
  label: string;
  icon?: string;
  buttonType?: AppButtons;
}

const Button = ({
  label,
  icon = rightArrow,
  buttonType = "primary",
  ...props
}: Props) => {
  const buttonStyle = buttonStyles[buttonType];
  const variant = buttonType === "primary" ? "contained" : "text";

  return (
    <MuiButton
      {...props}
      variant={variant}
      sx={buttonStyle}
      endIcon={<Icon iconImage={icon} />}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
