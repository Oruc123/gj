import React from "react";
import { styled } from "../ColumnBlock/Atom";
import { Box, Button, Typography } from "@material-ui/core";
import { ISpinner, ILocation } from "../../../../Icons";
import { ctx } from "../../../../../context";
const Objects = () => {
  const classes = styled();
  const { mobile } = React.useContext(ctx);
  return (
    <Box className={classes.paper}>
      <Typography variant="h2">Starbucks</Typography>
      <div className={classes.itemWrapper}>
        <Box className={classes.item}>
          <Typography variant="h1" className={classes.counthead} component="h2">
            6900
          </Typography>
          <Typography className={classes.subTitle}>Locations</Typography>
        </Box>
        <Box className={classes.item}>
          <Box display="flex" alignItems="flex-start">
            {mobile && (
              <Box marginTop={1} marginRight={2}>
                <ISpinner />
              </Box>
            )}
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
        </Box>
      </div>
      <Box marginTop={3}>
        <Button href="#" color="primary" startIcon={<ILocation />}>
          New location?
        </Button>
      </Box>
    </Box>
  );
};

export default Objects;
