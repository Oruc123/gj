import React from "react";
import { styled } from "../ColumnBlock/Atom";
import { Box, Button, Typography } from "@material-ui/core";
import { ISpinner, ITarget } from "../../../../Icons";
import { ctx } from "../../../../../context";
const PublishedListings = () => {
  const classes = styled();
  const { mobile } = React.useContext(ctx);
  return (
    <Box className={classes.paper}>
      <Typography variant="h2">Published listings</Typography>
      <div className={classes.itemWrapper}>
        <Box className={classes.item}>
          <Typography variant="h1" className={classes.counthead} component="h2">
            1 290
          </Typography>
          <Typography className={classes.subTitle}>On 5 servises</Typography>
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
                87%
              </Typography>
              <Typography className={classes.subTitle}>Accuracy</Typography>
            </Box>
          </Box>
        </Box>
      </div>
      <Box marginTop={3}>
        <Button href="#" color="primary" startIcon={<ITarget />}>
          Manage presence
        </Button>
      </Box>
    </Box>
  );
};

export default PublishedListings;
