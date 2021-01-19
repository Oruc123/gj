import { Box, Grid, useTheme, useMediaQuery } from "@material-ui/core";
import React from "react";
import Geoİndex from "../../GeojetIndex";
import Reviews from "./Reviews";
import Objects from "./Objects";
import PublishedListings from "./PublishedListings";
import Statistics from "./Statistics";

const Statics = () => {
  const theme = useTheme();
  const dekstopSmall = useMediaQuery(theme.breakpoints.between(640, 1366));
  const dekstopLarge = useMediaQuery(theme.breakpoints.up(1366));

  if (dekstopSmall) {
    return (
      <>
        <Grid container direction="row" spacing={2} alignItems="stretch">
          <Grid item xs={6}>
            <Geoİndex />
          </Grid>
          <Grid item xs={6}>
            <Box marginBottom={2}>
              <Objects />
            </Box>
            <Reviews />
          </Grid>
        </Grid>
        <Box marginTop={1}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <PublishedListings />
            </Grid>
            <Grid item xs={6}>
              <Statistics />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
  return (
    <Grid container direction="row" spacing={2} alignItems="stretch">
      <Grid item xs={12} md={6} lg={4}>
        <Geoİndex />
      </Grid>
      <Grid xs={12} item md={6} lg={4}>
        <Box marginBottom={2}>
          <Objects />
        </Box>
        <Reviews />
      </Grid>
      <Grid xs={12} item md={6} lg={4}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={12}>
            <PublishedListings />
          </Grid>
          <Grid item xs={12}>
            <Statistics />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Statics;
