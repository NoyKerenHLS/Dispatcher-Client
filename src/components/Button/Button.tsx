import { Button as MuiButton, ButtonProps } from "@mui/material/";
import rightArrow from "../../assets/Button/rightArrow.svg";
import { buttonStyles } from "./styles";
import { AppButtons } from "./types";
import Icon from "../Icons/button/RightArrowIcon";

interface Props extends ButtonProps {
  label: string;
  icon?: string;
  buttonType?: AppButtons;
}

const Button = ({
  label,
  icon = rightArrow,
  buttonType = "primary",
  sx,
  ...props
}: Props) => {
  const buttonStyle = buttonStyles[buttonType];
  const styledComb = { ...(sx ?? {}), ...buttonStyle };
  const variant = buttonType === "primary" ? "contained" : "text";

  return (
    <MuiButton {...props} variant={variant} sx={styledComb} endIcon={<Icon />}>
      {label}
    </MuiButton>
  );
};

export default Button;
