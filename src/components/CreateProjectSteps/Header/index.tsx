import React from "react";
import { Box, Grid } from "@material-ui/core";
import logo from "../../../assets/img/logo.svg";
import md from "../../../assets/img/md.png";
const Header = () => {
  return (
    <Box
      component="header"
      marginBottom="32px"
      bgcolor="#fff"
      height="56px"
      width="100%"
      display="flex"
      alignItems="center"
      paddingX="16px"
    >
      <Grid justify="space-between" container>
        <Grid item xs>
          <img src={logo} />
        </Grid>
        <Grid item xs>
          <Box textAlign="right">
            <img src={md} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;
