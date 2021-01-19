import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Box, TableContainer, TableSortLabel, Theme } from "@material-ui/core";
import TablePag from "./Tablepag";
import TChip from "./TChip";
import { ArrowDropDown } from "@material-ui/icons";

export const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 700,
    maxWidth: "100%",
  },

  tableContainer: {
    maxWidth: "100%",
    [theme.breakpoints.down(1356)]: {
      paddingBottom: 8,
    },
  },

  cell: {
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 700,
    color: "#666666",
  },
  sortButton: {
    "& .MuiTableSortLabel-icon": { color: "#7E92B6!important", fontSize: 24 },
    "&.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon": {
      opacity: 1,
    },
    "&.MuiTableSortLabel-root.MuiTableSortLabel-active ": {
      opacity: 1,
      color: "#666666!important",
    },
  },
}));
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
    <TableCell className={classes.cell} align="left">
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
function createData(
  name: string,
  calories: string,
  fat: number | string,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "T5A 5B9", "11260 Groat Road, Houston", 24, 4.0),
  createData(
    "Ice cream sandwich",
    "T5A 5B9",
    "11260 Groat Road, Houston",
    37,
    4.3
  ),
  createData("Eclair", "T5A 5B9", "11260 Groat Road, Houston", 24, 6.0),
  createData("Cupcake", "T5A 5B9", "11260 Groat Road, Houston", 67, 4.3),
  createData("Gingerbread", "T5A 5B9", "11260 Groat Road, Houston", 49, 3.9),
];
const GTable = () => {
  const classes = useStyles();

  return (
    <>
      <Box width="100%" style={{ overflowX: "hidden" }}>
        <TableContainer className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableSortButton active dir="desc" label="Store name" />
                <TableSortButton dir="desc" label="CODE" />
                <TableSortButton dir="asc" label="address" />
                <TableSortButton dir="desc" label="rating" />
                <TableSortButton dir="desc" label="completed" />
                <TableSortButton dir="asc" label="CORRECTED" />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <Link variant="h4"> {row.name}</Link>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2">{row.calories}</Typography>
                  </TableCell>
                  <TableCell style={{ minWidth: 350 }} align="left">
                    <Typography variant="body2">{row.fat}</Typography>
                  </TableCell>

                  <TableCell align="left">
                    <TChip color="warning" label={row.carbs} />
                  </TableCell>

                  <TableCell align="center">
                    <Typography color="primary" variant="body2">
                      3.1
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography variant="body2">2.6</Typography>
                  </TableCell>
                </TableRow>
              ))}
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <Link variant="h4"> {row.name}</Link>
                  </TableCell>
                  <TableCell align="left">
                    <Typography variant="body2">{row.calories}</Typography>
                  </TableCell>
                  <TableCell style={{ minWidth: 350 }} align="left">
                    <Typography variant="body2">{row.fat}</Typography>
                  </TableCell>

                  <TableCell align="left">
                    <TChip color="warning" label={row.carbs} />
                  </TableCell>

                  <TableCell align="center">
                    <Typography color="primary" variant="body2">
                      5.8
                    </Typography>
                  </TableCell>

                  <TableCell align="center">
                    <Typography variant="body2">6.0 </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <TablePag />
    </>
  );
};
export default GTable;
export const GTable2 = () => {
  const classes = useStyles();
  return (
    <>
      <Table
        className={classes.table}
        style={{ borderTop: "1px solid  #E6E9F5" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableSortButton active dir="desc" label="Store name" />
            <TableSortButton dir="desc" label="CODE" />
            <TableSortButton dir="desc" label="address" />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link variant="h4"> {row.name}</Link>
              </TableCell>
              <TableCell align="left">
                <Typography style={{ fontSize: 14 }} variant="body2">
                  {row.calories}
                </Typography>
              </TableCell>

              <TableCell align="left">
                <Typography style={{ fontSize: 14 }} variant="body2">
                  11260 Groat Road
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
