import { Box } from "@material-ui/core";

import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
    },
    paginationRoot: {
      "& .MuiPaginationItem-root": {
        color: theme.palette.secondary.main,
        fontSize: 12,
        fontWeight: 400,
      },
      "& .MuiPaginationItem-page.Mui-selected": {
        background: theme.palette.tuscle.main,
      },
      "& .MuiPaginationItem-page": {
        margin: 0,
        // padding: 0,
        marginRight: 2,
        minWidth: 24,
        height: 24,
      },
    },
  })
);

const TablePag = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box fontWeight={300} fontSize={14}>
        1-5 of 225
      </Box>
      <Box display="flex" alignItems="center">
        <Pagination
          showFirstButton
          showLastButton
          className={classes.paginationRoot}
          siblingCount={0}
          boundaryCount={1}
          shape="rounded"
          count={222}
        />
      </Box>
    </Box>
  );
};

export default TablePag;
