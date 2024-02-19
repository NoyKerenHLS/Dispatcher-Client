import { Card as MuiCard, CardProps } from "@mui/material";
import { AppCards } from "./types";
import { cardStyles } from "./styles";

interface Props extends CardProps {
  children: React.ReactNode;
  cardType: AppCards;
}

export const Card = ({ children, cardType, ...props }: Props) => {
  const style = cardStyles[cardType];

  return (
    <MuiCard sx={style} {...props}>
      {children}
    </MuiCard>
  );
};
