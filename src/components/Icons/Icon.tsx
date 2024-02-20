import { Box, BoxProps } from "@mui/material";
import React from "react";

interface Props extends BoxProps {
  children: React.ReactNode;
}

const Icon = ({ children, ...props }: Props) => {
  return <Box {...props}>{children}</Box>;
};

export default Icon;
