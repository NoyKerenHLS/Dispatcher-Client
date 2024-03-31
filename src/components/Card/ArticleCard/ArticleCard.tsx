import { Card } from "../Card";
import Button from "../../button/Button";
import { Box, Typography, Stack } from "@mui/material";
import {
  articleCardStyle,
  commentStyle,
  descriptiontStyle,
  titleStyle,
} from "./styles";
import { FC } from "react";
import { formatDate } from "./utils";
import dispatcherLogo from "../../../assets/dispatcherLogo.jpg";
import { useSearchParams } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
  innerRef?: React.Ref<HTMLDivElement>;
}

const ArticleCard: FC<Props> = ({ data, innerRef }: Props) => {
  const [searchParams] = useSearchParams();
  const image = data.urlToImage ? data.urlToImage : dispatcherLogo;

  //for israel
  const alignItems = searchParams.get("Country") === "il" ? "end" : "unset";
  const direction = searchParams.get("Country") === "il" ? "rtl" : "unset";
  const pr = searchParams.get("Country") === "il" ? "unset" : "inherit";

  return (
    <Card innerRef={innerRef} sx={articleCardStyle}>
      <Stack direction={{ xs: "column", sm: "row" }} height="100%">
        <Box display={{ xs: "none", sm: "flex" }} flex={{ sm: 3, md: 2 }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={image}
            alt={image}
          />
        </Box>

        <Box display={{ xs: "flex", sm: "none" }} flex={{ sm: 3, md: 2 }}>
          <img
            style={{ width: "100%", height: "150px" }}
            src={image}
            alt={image}
          />
        </Box>

        <Stack
          direction={"column"}
          sx={{ padding: "16px", gap: "14px" }}
          flex={5}
          alignItems={alignItems}
        >
          {data.publishedAt && (
            <Typography sx={commentStyle}>
              {formatDate(data.publishedAt)}
            </Typography>
          )}

          {data.title && (
            <Typography
              lineHeight={"22px"}
              sx={{ ...titleStyle, direction: direction, pr: pr }}
            >
              {data.title}
            </Typography>
          )}

          <Stack direction={"row"} sx={commentStyle}>
            {
              <Typography>
                {[data.author, data.source.name].filter(Boolean).join(",")}
              </Typography>
            }
          </Stack>

          {data.description && (
            <Typography sx={descriptiontStyle}>{data.description}</Typography>
          )}

          <Button
            sx={{
              mt: "auto",
              width: { xs: "100%", sm: "unset" },
              alignSelf: { sm: "flex-end" },
            }}
            label="navigate to dispatch"
            component="a"
            href={data.url!}
            disabled={!data.url}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

export default ArticleCard;
