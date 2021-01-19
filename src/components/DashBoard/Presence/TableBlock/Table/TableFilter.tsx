import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import useStyles from "./Atom";
import clsx from "clsx";
const TableFilter = () => {
  const styles = useStyles();
  return (
    <Box minWidth={776} paddingY={2} paddingX={5}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FilterListIcon style={{ color: "#000", marginTop: 2 }} />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={clsx(styles.filterButton, styles.filterButtonError)}
          >
            Errors (5)
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={clsx(styles.filterButton, styles.filterButtonWarning)}
          >
            Warnings (0)
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={clsx(styles.filterButton, styles.filterButtonInfo)}
          >
            Updating (5)
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className={clsx(styles.filterButton, styles.filterButtonSucces)}
          >
            Correct (5)
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TableFilter;
