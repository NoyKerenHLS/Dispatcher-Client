import { Card } from "../Card";
import Button from "../../Button/Button";
import { Box, Typography, Stack } from "@mui/material";
import { ArticleData } from "./types";
import {
  articleCardStyle,
  commentStyle,
  descriptiontStyle,
  titleStyle,
} from "./styles";

interface Props {
  data: ArticleData;
}

const ArticleCard = ({ data }: Props) => {
  const image = data.urlToImage
    ? data.urlToImage
    : "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1467844599.jpg?w=1024";

  return (
    <Card sx={articleCardStyle}>
      <Stack direction={{ xs: "column", sm: "row" }} height="100%">
        <Box flex={2}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt={image}
          />
        </Box>

        <Stack
          direction={"column"}
          sx={{ padding: "16px", width: "100%" }}
          flex={5}
        >
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
            <Typography sx={descriptiontStyle}>{data.description}</Typography>
          )}

          <Button
            sx={{ mt: "auto", alignSelf: "flex-end" }}
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
