import { Grid, TextField, InputAdornment } from "@material-ui/core";
import React from "react";
import { FilterBlock } from "../Atom";
import BlockNav from "./BlockNav";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiOutlinedInput-input": {
        padding: theme.spacing(1.5),
      },
    },
  })
);
const Period = () => {
  const styles = useStyles();
  return (
    <FilterBlock>
      <BlockNav title="Period" />
      <Grid container spacing={1}>
        <Grid xs={12} item lg={6}>
          <TextField
            className={styles.root}
            variant="outlined"
            fullWidth
            defaultValue="2017-05-24"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayOutlinedIcon
                    style={{ color: "#6C82AC", fontSize: 20 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            className={styles.root}
            variant="outlined"
            fullWidth
            defaultValue="2017-05-24"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarTodayOutlinedIcon
                    style={{ color: "#6C82AC", fontSize: 20 }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </FilterBlock>
  );
};
export default Period;
