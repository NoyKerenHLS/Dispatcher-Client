import { Card as MuiCard, CardProps } from "@mui/material";
import { cardStyle } from "./styles";

interface Props extends CardProps {
  children: React.ReactNode;
  innerRef?: React.Ref<HTMLDivElement>;
}

export const Card = ({ children, sx, innerRef, ...props }: Props) => {
  const styledComb = { ...(sx ?? {}), ...cardStyle };

  return (
    <MuiCard ref={innerRef} sx={styledComb} {...props}>
      {children}
    </MuiCard>
  );
};
