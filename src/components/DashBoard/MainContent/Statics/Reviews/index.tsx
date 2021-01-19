import React from "react";
import { styled } from "../ColumnBlock/Atom";
import { Box, Button, Typography } from "@material-ui/core";
import { IMessage } from "../../../../Icons";
import GRaiting from "../../../GRaiting";
const Rewies = () => {
  const classes = styled();
  return (
    <Box className={classes.paper}>
      <Typography variant="h2">Rewies</Typography>
      <div className={classes.itemWrapper}>
        <Box className={classes.item}>
          <Typography variant="h1" className={classes.counthead} component="h2">
            4.8
          </Typography>
          <Box style={{ transform: "translateY(5px)" }} marginTop="-5px">
            <GRaiting value={4} />
          </Box>
        </Box>
        <Box className={classes.item}>
          <Box>
            <Typography
              variant="h1"
              className={classes.counthead}
              component="h2"
            >
              65%
            </Typography>
            <Typography className={classes.subTitle}>Completnes</Typography>
          </Box>
        </Box>
      </div>
      <Box marginTop={3}>
        <Button
          href="#"
          disableRipple
          disableTouchRipple
          color="primary"
          startIcon={<IMessage />}
        >
          Get more rewievs
        </Button>
      </Box>
    </Box>
  );
};

export default Rewies;
