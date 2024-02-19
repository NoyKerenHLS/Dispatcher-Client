import { Card as MuiCard, CardProps } from "@mui/material";
import { cardStyle } from "./styles";

interface Props extends CardProps {
  children: React.ReactNode;
}

export const Card = ({ children, sx, ...props }: Props) => {
  const styledComb = { ...(sx ?? {}), ...cardStyle };

  return (
    <MuiCard sx={styledComb} {...props}>
      {children}
    </MuiCard>
  );
};
