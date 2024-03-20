import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import notFound from "../../assets/notFound.svg";
import chartNotFound from "../../assets/chartNotFound.svg";
import { Colors } from "../../globalStyle/Colors";
import WidgetCard from "../card/WidgetCard/WidgetCard";

interface IProps {}

const EmptyPage: FC<IProps> = (props) => {
  return (
    <Stack direction="row">
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
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <WidgetCard
          title="Sources"
          childrexSx={{ alignSelf: "center", padding: "30px" }}
        >
          <img src={chartNotFound} alt="chartNotFound" />
          <Typography
            sx={{ fontSize: "18px", color: Colors.slateBlue, mt: "10px" }}
          >
            No data to display
          </Typography>
        </WidgetCard>

        <WidgetCard
          title="Dates"
          childrexSx={{ alignSelf: "center", padding: "30px" }}
        >
          <img src={chartNotFound} alt="chartNotFound" />
          <Typography
            sx={{ fontSize: "18px", color: Colors.slateBlue, mt: "10px" }}
          >
            No data to display
          </Typography>
        </WidgetCard>
      </Box>
    </Stack>
  );
};

export default EmptyPage;
