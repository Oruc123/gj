import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core/";
import clsx from "clsx";
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

const CPaper = ({
  children,
  noPadding,
  height,
}: {
  children: React.ReactNode;
  noPadding?: boolean;
  height?: boolean;
}) => {
  const classes = useStyles();
  return (
    <Paper
      className={clsx(
        classes.root,
        noPadding ? classes.noPadding : null,
        height ? classes.height : null
      )}
    >
      {children}
    </Paper>
  );
};
export default CPaper;
