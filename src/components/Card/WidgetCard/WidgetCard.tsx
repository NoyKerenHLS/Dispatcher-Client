import { Box, Stack, Typography } from "@mui/material";
import { Card } from "../Card";
import Divider from "../../Divider/Divider";
import { Colors } from "../../../globalStyle/Colors";
import { titleStyle, widgetCardStyle } from "./styles";

interface Props {
  title: string;
  children: React.ReactNode;
}

const WidgetCard = ({ title, children }: Props) => {
  return (
    <Card sx={widgetCardStyle}>
      <Stack sx={{ padding: "25px" }}>
        <Typography sx={titleStyle}>{title}</Typography>
        <Divider color={Colors.slateBlue} width="20px" height="4px" />
        <Box>{children}</Box>
      </Stack>
    </Card>
  );
};

export default WidgetCard;
