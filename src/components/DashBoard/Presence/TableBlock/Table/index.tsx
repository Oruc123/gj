import { Table, TableBody, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import TableSortButton from "./TableSortButton";
import TableColumn from "./TableColumn";
import useStyles from "./Atom";
import TableFilter from "./TableFilter";
const PresenceTable = () => {
  const classes = useStyles();
  return (
    <div className={classes.tableRoot}>
      <TableFilter />
      <Table style={{ minWidth: 776 }}>
        <TableHead className={classes.TableHead}>
          <TableRow>
            <TableSortButton active dir="desc" label="Source" />
            <TableSortButton dir="desc" label="Info" />
            <TableSortButton dir="asc" label="Contacts" />
            <TableSortButton dir="desc" label="Data correction" />
            <TableSortButton dir="desc" label="Status" />
          </TableRow>
        </TableHead>

        <TableBody>
          <TableColumn progressLabel="32%" color="success" />
          <TableColumn progressLabel="32%" color="error" />
          <TableColumn progressLabel="Calculating" color="warning" />
          <TableColumn progressLabel="Calculating" color="warning" />
          <TableColumn progressLabel="32%" color="warning" />
        </TableBody>
      </Table>
    </div>
  );
};
export default PresenceTable;
