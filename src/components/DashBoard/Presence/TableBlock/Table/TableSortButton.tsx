import { TableCell, TableSortLabel } from "@material-ui/core";
import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import useStyles from "./Atom";
const TableSortButton = ({
  label,
  dir,
  active = false,
}: {
  label: string;
  dir: "asc" | "desc";
  active?: boolean;
}) => {
  const classes = useStyles();
  return (
    <TableCell align="left">
      <TableSortLabel
        className={classes.sortButton}
        direction={dir}
        IconComponent={ArrowDropDown}
        active={active}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
};
export default TableSortButton;
