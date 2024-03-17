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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: any;
  innerRef?: React.Ref<HTMLDivElement>;
}

const ArticleCard: FC<Props> = ({ data, innerRef }: Props) => {
  const image = data.urlToImage
    ? data.urlToImage
    : "https://techcrunch.com/wp-content/uploads/2023/05/GettyImages-1467844599.jpg?w=1024";

  return (
    <Card innerRef={innerRef} sx={articleCardStyle}>
      <Stack direction={{ xs: "column", sm: "row" }} height="100%">
        <Box flex={{ sm: 3, md: 2 }}>
          <img
            style={{ width: "100%", height: "100%" }} // fix for mobile
            src={image}
            alt={image}
          />
        </Box>

        <Stack
          direction={"column"}
          sx={{ padding: "16px", gap: "14px" }}
          flex={5}
        >
          {data.publishedAt && (
            <Typography sx={commentStyle}>{data.publishedAt}</Typography>
          )}

          {data.title && (
            <Typography lineHeight={"22px"} sx={titleStyle}>
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
