import { Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import GBreadcump from "../GBreadcump";
import LastProgress from "./LastProgress";
import Statics from "./Statics";
const LocationContent = () => {
  return (
    <>
      <GBreadcump />
      <Statics />
      <LastProgress />
    </>
  );
};
export default LocationContent;
