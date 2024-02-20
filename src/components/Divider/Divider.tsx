import { Box } from "@mui/material";

interface Props {
  color: string;
  width: string;
  height: string;
  borderRadius?: string;
}

const Divider = ({ color, width, height, borderRadius = "20px" }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: width,
        height: height,
        borderRadius: borderRadius,
      }}
    />
  );
};

export default Divider;
