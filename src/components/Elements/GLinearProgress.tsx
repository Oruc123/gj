import React from "react";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";

import LinearProgress from "@material-ui/core/LinearProgress";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 6,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: "#E0E1E5",
    },
    bar: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main,
    },
  })
)(LinearProgress);

export default function GLinearProgress({ value }: { value: number }) {
  return <BorderLinearProgress variant="determinate" value={value} />;
}
