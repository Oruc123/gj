import { Box, Typography } from "@material-ui/core";
import React from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import clsx from "clsx";
import useStyles from "./Atom";
interface ITableRow {
  locationName: string;
  comparison: number;
  accurcay: number;
}
const TableRow: React.FC<ITableRow> = ({
  locationName,
  comparison,
  accurcay,
}) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.row, classes.tableRow)}>
      <Box paddingTop={0.5}>
        <Typography variant="body1">{locationName}</Typography>
      </Box>
      <Box marginLeft="auto">
        {comparison > 40 && <KeyboardArrowUpIcon className={classes.upIcon} />}
        {comparison <= 40 && (
          <KeyboardArrowDown
            className={clsx(classes.upIcon, classes.redIcon)}
          />
        )}

        <Box marginRight={4} paddingRight={3} component="span">
          <Typography component="span" variant="body1">
            {comparison}%
          </Typography>
        </Box>
        <Typography component="span" variant="body1">
          {accurcay}%
        </Typography>
      </Box>
    </div>
  );
};
export default TableRow;
