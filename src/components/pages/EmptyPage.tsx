import { Box, Typography } from "@mui/material";
import { FC } from "react";
import notFound from "../../assets/notFound.svg";
import { Colors } from "../../globalStyle/Colors";

interface IProps {}

const EmptyPage: FC<IProps> = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="16px"
      width="100vh"
    >
      <img src={notFound} alt="notFound" />
      <Typography sx={{ fontSize: "18px", color: Colors.slateBlue }}>
        We couldn’t find any matches for your query
      </Typography>
    </Box>
  );
};

export default EmptyPage;
