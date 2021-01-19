import { Box, Typography, OutlinedInput } from "@material-ui/core";
import React from "react";
import Controllers from "../Controllers";
import useStyles from "./Atom";
import Table from "./Table";

const Import = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box marginBottom={2}>
        <Typography variant="h2" style={{ marginBottom: 16 }}>
          Import data
        </Typography>
        <Typography variant="body2">
          This table contains a list of all imported locations
        </Typography>
      </Box>

      <Box marginBottom={2}>
        <OutlinedInput
          value="Error message – Incorrect data entry"
          error
          style={{
            height: 48,
            fontSize: 14,
            fontWeight: 400,
            background: "rgba(167, 67, 67, 0.1)",
          }}
          fullWidth
        />
      </Box>
      <Box padding={3} paddingBottom={2} borderRadius={4} bgcolor="#fff">
        <Typography variant="h2" style={{ marginBottom: 8, marginTop: 8 }}>
          Starbucks
        </Typography>
        <div className={classes.tableWrapper}>
          <Table tableHead="Group 1 Long Very Long Name" />
          <Table tableHead="Group 2 Short" />
          <Table tableHead="Group 3 Extremely long long long name" />
        </div>
        <Box paddingTop={2} paddingBottom={0}>
          <Controllers
            handleBack={() => {}}
            handleNext={() => {}}
            stepsLength={3}
            activeStep={2}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Import;
