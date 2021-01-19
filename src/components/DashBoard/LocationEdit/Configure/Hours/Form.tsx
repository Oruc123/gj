import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";

import HoursColum from "./HoursColumn";
const Form = () => {
  return (
    <Box paddingY={2} paddingX={3}>
      <HoursColum label="Sunday" />
      <HoursColum label="Monday" />
      <HoursColum label="Tuesday" />
      <HoursColum label="Wednesday" />
      <HoursColum label="Thursday" />
      <HoursColum label="Friday" />
      <HoursColum label="Saturday" />
    </Box>
  );
};

export default Form;
