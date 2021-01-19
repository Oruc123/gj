import React from "react";
import { styled } from "../ColumnBlock/Atom";
import { Box, Button, Typography } from "@material-ui/core";
import { IUser } from "../../../../Icons";
const Statistics = () => {
  const classes = styled();
  return (
    <Box className={classes.paper}>
      <Typography variant="h2">Statistics</Typography>
      <div className={classes.itemWrapper}>
        <Box className={classes.item}>
          <Typography variant="h1" className={classes.counthead} component="h2">
            1 290
          </Typography>
          <Typography className={classes.subTitle}>Views</Typography>
        </Box>
        <Box className={classes.item}>
          <Box>
            <Typography
              variant="h1"
              className={classes.counthead}
              component="h2"
            >
              857
            </Typography>
            <Typography className={classes.subTitle}>Actions</Typography>
          </Box>
        </Box>
      </div>
      <Box marginTop={3}>
        <Button
          href="#"
          disableRipple
          disableTouchRipple
          color="primary"
          startIcon={<IUser />}
        >
          Get more rewievs
        </Button>
      </Box>
    </Box>
  );
};

export default Statistics;
