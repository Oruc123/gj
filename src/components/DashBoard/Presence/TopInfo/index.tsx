import { useTheme, Grid, useMediaQuery } from "@material-ui/core";
import React from "react";
import Info from "./Info";
import Presence from "./Presence";
import Statics from "./Statics";
const TopInfo = () => {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up("md"));
  if (match) {
    return (
      <Grid container spacing={2}>
        <Grid xs={12} item sm={6} md={4}>
          <Info />
        </Grid>
        <Grid xs={12} item sm={6} md={4}>
          <Presence />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Statics />
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={2}>
      <Grid xs={12} item sm={6} md={4}>
        <Info />
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Statics />
      </Grid>
      <Grid xs={12} item>
        <Presence />
      </Grid>
    </Grid>
  );
};
export default TopInfo;
