import { Box, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReviewTop from "./ReviewTop";
import ReviewContent from "./ReviewContent";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: "#fff",
      marginTop: theme.spacing(2),
      padding: theme.spacing(3),
      borderRadius: 4,
      [theme.breakpoints.down("sm")]: {
        padding: 16,
      },
    },
  })
);
const Review = ({
  isReplied,
  openDialog,
}: {
  isReplied?: boolean;
  openDialog?: boolean;
}) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.wrapper}>
        <Paper elevation={0}>
          <ReviewTop />
          <ReviewContent openDialog={openDialog} isReplied={isReplied} />
        </Paper>
      </Box>
    </>
  );
};

export default Review;
