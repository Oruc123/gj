import { Box, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.border.main}`,
    position: "relative",
    padding: 24,
    backgroundColor: "#fff",
    zIndex: 1444,
    paddingLeft: 104,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 23,
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography
        style={{ fontSize: 11, color: "#5C6784", fontWeight: 400 }}
        variant="body1"
      >
        © GeoJet 2020. All rights reserved
      </Typography>
    </Box>
  );
};
export default Footer;
