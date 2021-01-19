import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import GRaiting from "../../GRaiting";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      background: "#fff",
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
      borderRadius: 4,
    },
    avatar: {
      background: theme.palette.arrow.main,
      fontSize: 18,
      fontWeight: 700,
      width: 48,
      height: 48,
      marginRight: theme.spacing(2),
    },
    infoWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        justifyContent: "flex-start",
        marginTop: "-8px",
      },
    },
  })
);

const ReviewTop = () => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box display="flex" alignItems="center">
          <Avatar className={classes.avatar}>AK</Avatar>
          <Typography style={{ fontSize: 15 }} variant="h3">
            Александра К.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box className={classes.infoWrapper}>
          <GRaiting value={4} />
          <Box marginLeft={2} style={{ transform: "translateY(1.5px)" }}>
            <Typography component="span" variant="body2">
              27.04.2020 в 07:50
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ReviewTop;
