import { Box, Typography } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
import useStyles from "./Atom";
import TableRow from "./TableRow";

const rows = [
  { locationName: "KFC", comparison: 41, accurcay: 22 },
  { locationName: "PIZZA HUT", comparison: 11, accurcay: 34 },
  { locationName: "Burger King", comparison: 22, accurcay: 22 },
];
const Table = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={clsx(classes.row, classes.tableHead)}>
        <div>
          <Typography variant="body1">Location name</Typography>
        </div>
        <Box marginLeft="auto" display="flex">
          <Typography style={{ marginRight: 24 }} variant="body1">
            Comparison
          </Typography>
          <Typography variant="body1">Accurcay </Typography>
        </Box>
      </div>
      {rows.map((el, ind) => (
        <TableRow key={ind} {...el} />
      ))}
    </div>
  );
};
export default Table;
