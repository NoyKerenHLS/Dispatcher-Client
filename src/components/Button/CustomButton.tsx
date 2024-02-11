import Button from "@mui/material/Button";
import rightArrow from "../../assets/rightArrow.svg";
import { buttonType } from "./styles";
import { ButtonType } from "./types";
import { ButtonTypes } from "../../enums/ButtonTyps";

interface Props {
  children: string;
  withIcon?: boolean;
  type?: keyof ButtonType;
}

const CustomButton = ({ children, withIcon, type }: Props) => {
  const buttonStyle = type ? buttonType[type] : buttonType[ButtonTypes.primary];
  const variant =
    buttonStyle === buttonType[ButtonTypes.primary] ? "contained" : "text";

  return (
    <Button variant={variant} sx={buttonStyle}>
      {children}
      {withIcon && <img style={{ paddingLeft: "10px" }} src={rightArrow} />}
    </Button>
  );
};

export default CustomButton;
