import { Box, Typography } from "@material-ui/core";
import React from "react";
import { IDelete, IEdit } from "../../../Icons";
import { ReviewButtons } from "./Button";
import { useStyles } from "./ReviewContent";
const Reply = () => {
  const classes = useStyles();
  return (
    <Box className={classes.replyContent}>
      <Box className={classes.replyContentTop}>
        <Box textAlign="right">
          <Typography variant="body2">27.04.2020 в 07:50</Typography>
        </Box>
        <Typography style={{ fontSize: 15 }} variant="h3">
          Дмитрий Ларионов
        </Typography>
      </Box>
      <Box marginTop={2} paddingRight={2}>
        <Typography className={classes.text}>
          Спасибо за положительный отзыв и доверие при выборе финансового
          партнера. Рады, что сотрудничество в полной мере оправдало ожидания.
        </Typography>
      </Box>
      <Box marginTop={1.5}>
        <ReviewButtons label="Edit" icon={<IEdit />} />
        <ReviewButtons label="Delete" icon={<IDelete />} />
      </Box>
    </Box>
  );
};

export default Reply;
