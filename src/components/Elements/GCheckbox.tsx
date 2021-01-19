import React from "react";
import { Checkbox, createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.border.main}`,
      boxShadow: "none",
      padding: theme.spacing(3),
      borderRadius: 4,
      //   [theme.breakpoints.down(769)]: {
      //     padding: theme.spacing(2),
      //     paddingBottom: 4,
      //   },
    },
    noPadding: {
      padding: 0,
    },
    height: {
      height: "100%",
    },
  })
);

const GCheckbox = () => {
  return <Checkbox />;
};
