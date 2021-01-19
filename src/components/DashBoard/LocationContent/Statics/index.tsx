import { Grid, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import Geoİndex from "../../GeojetIndex";
import LoactionRaiting from "../Raiting";
import Profile from "../Profile";
import Data from "./Data";
const Statics = () => {
  const theme = useTheme();
  const desktopLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const desktopSmall = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  if (desktopLarge) {
    return (
      <Grid container spacing={2}>
        <Grid xs item sm={6} md={8}>
          <Grid container spacing={2}>
            <Grid xs item sm={6} md={6}>
              <Geoİndex />
            </Grid>
            <Grid xs item sm={6} md={6}>
              <LoactionRaiting />
            </Grid>
            <Grid xs item md={12}>
              <Data />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
  if (desktopSmall) {
    return (
      <Grid container spacing={2}>
        <Grid xs={12} item sm={6}>
          <Geoİndex />
        </Grid>
        <Grid xs={12} item sm={6}>
          <Profile />
        </Grid>
        <Grid xs={12} item sm={6}>
          <LoactionRaiting />
        </Grid>
        <Grid xs={12} item sm={6}>
          <Data column />
        </Grid>
      </Grid>
    );
  }
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Geoİndex />
        </Grid>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid xs item>
          <Data column />
        </Grid>
        <Grid xs item>
          <LoactionRaiting />
        </Grid>
      </Grid>
    </>
  );
};
export default Statics;
