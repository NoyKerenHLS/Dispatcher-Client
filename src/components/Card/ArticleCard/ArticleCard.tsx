import { Card } from "../Card";
import Button from "../../Button/Button";
import { Box, Typography, Stack } from "@mui/material";
import { ArticleData } from "./types";
import { commentStyle, descriptionStyle, titleStyle } from "./styles";

interface Props {
  data: ArticleData;
}

const ArticleCard = ({ data }: Props) => {
  const image = data.urlToImage ? data.urlToImage : "";

  return (
    <Card cardType="article">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={2}>
          <img
            style={{ maxWidth: "100%", height: "100%" }}
            src={image}
            alt={image}
          />
        </Box>
        <Box sx={{ padding: "16px", width: 1 }} flex={5}>
          {data.publishedAt && (
            <Typography sx={commentStyle}>{data.publishedAt}</Typography>
          )}
          {data.title && <Typography sx={titleStyle}>{data.title}</Typography>}
          <Stack direction={"row"} sx={commentStyle}>
            {
              <Typography>
                {[data.author, data.source.name].filter(Boolean).join(",")}
              </Typography>
            }
          </Stack>
          {data.description && (
            <Typography sx={descriptionStyle}>{data.description}</Typography>
          )}
          <Stack
            direction={"row"}
            sx={{
              justifyContent: { md: "flex-end" },
            }}
          >
            <Button
              label="navigate to dispatch"
              component="a"
              href={data.url!}
              disabled={!data.url}
            />
          </Stack>
        </Box>
      </Stack>
    </Card>
  );
};

export default ArticleCard;
