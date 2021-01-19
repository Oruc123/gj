import React from "react";
import {
  Box,
  Typography,
  useTheme,
  LinearProgress,
  useMediaQuery,
} from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { createStyles, withStyles, Theme } from "@material-ui/core/styles";
const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 6,
      borderRadius: 50,
    },
    colorPrimary: {
      backgroundColor: "#FF9B04",
    },
    bar: {
      display: "none",
    },
  })
)(LinearProgress);

const ProgressLine = ({ value, counts }: { value: number; counts: number }) => {
  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.down("md"));
  const umnojitel = breakPoint ? 29 : 39;
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <Box marginRight={3} display="flex" alignItems="center">
        <StarRoundedIcon
          color="secondary"
          style={{ width: 8, height: 8, marginRight: 4 }}
        />
        <Typography color="secondary" component="span" variant="body1">
          {value}
        </Typography>
      </Box>

      <Box marginRight={2}>
        <BorderLinearProgress
          style={{ width: value * umnojitel }}
          variant="determinate"
          value={50}
        />
      </Box>

      <Box>
        <Typography style={{ color: "#5566E0" }} component="span" variant="h4">
          {counts}
        </Typography>
      </Box>
    </Box>
  );
};

const ProogressBar = () => {
  return (
    <>
      <ProgressLine counts={9999} value={5} />
      <ProgressLine counts={9} value={4} />
      <ProgressLine counts={12} value={3} />
      <ProgressLine counts={7} value={2} />
      <ProgressLine counts={4} value={1} />
    </>
  );
};

export default ProogressBar;
