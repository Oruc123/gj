import { Box, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 24,
    height: 20,
    fontWeight: 700,
    color: "#fff",
    fontSize: 11,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
  },
  danger: {
    background: theme.palette.error.main,
  },
  warning: {
    background: "#DD841C",
  },
  success: {
    background: "#50921F",
  },
}));
type IChip = {
  label: string | number;
  color: "danger" | "warning" | "success";
};
const TChip: React.FC<IChip> = ({ color, label }) => {
  const classes = useStyles();
  return <Box className={clsx(classes.root, classes[color])}>{label}</Box>;
};
export default TChip;
