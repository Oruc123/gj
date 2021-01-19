import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { Chip, Paper } from "@material-ui/core/";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    locationHeadBox: {
      marginTop: theme.spacing(3),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      [theme.breakpoints.down(769)]: {
        alignItems: "center",
        "& h2": {
          fontSize: 16,
          transform: "translatey(-6px)",
        },
      },
    },
  })
);
export const GPaper = withStyles((theme: Theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.border.main}`,
      boxShadow: "none",
      padding: theme.spacing(3),
      borderRadius: 0,
      paddingBottom: 8,
      [theme.breakpoints.down(769)]: {
        padding: theme.spacing(2),
        paddingBottom: 4,
      },
    },
  })
)((props: { style?: object }) => <Paper {...props} />);

export const GChip = withStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.tuscle.main,
      fontWeight: 700,
    },
  })
)((props: { label: string }) => <Chip color="default" {...props} />);
