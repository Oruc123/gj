import { Box, InputBase } from "@material-ui/core";
import React from "react";
import { useStyles } from "../Header/Atom";
import { ISearch } from "../../Icons";
const GSearch = () => {
  const classes = useStyles();
  return (
    <Box className={classes.searchBox}>
      <ISearch />
      <InputBase
        style={{ paddingLeft: 16 }}
        className={classes.input}
        placeholder="Search "
        inputProps={{ "aria-label": "search " }}
      />
    </Box>
  );
};

export default GSearch;
