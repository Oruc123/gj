import { Box, Grid, Typography, Button } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";
import Column from "./Colum";
import { useStyles } from "./Atom";
const LastProgress = () => {
  const classes = useStyles();
  return (
    <>
      <Box marginTop={2.6} marginBottom={1.8}>
        <Typography variant="h2" style={{ color: "#666" }} component="h2">
          Progress in last
          <Button
            endIcon={<ArrowDropDownIcon />}
            className={classes.dropButton}
          >
            30 days
          </Button>
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Column
            label="Views"
            value="12 678 000 "
            dataOut={[0, 200000, 100000, 230000, 180000, 200000]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Column
            label="Phone calls"
            value="100 000"
            dataOut={[0, 400000, 100000, 230000, 180000, 200000]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Column
            label="Rating"
            value="4.6"
            dataOut={[0, 200000, 100000, 230000, 180000, 200000]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Column
            label="Clicks on website"
            value="12 678 000 "
            dataOut={[0, 800000, 100000, 230000, 180000, 200000]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Column
            label="Reviews"
            value="100 000"
            dataOut={[0, 200000, 100000, 230000, 180000, 200000]}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Column
            label="Direction requests"
            value="12 678"
            dataOut={[0, 200000, 100000, 230000, 180000, 200000]}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default LastProgress;
