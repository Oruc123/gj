import { withStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import theme from "../../../../theme/theme";

export const FilterBlock = withStyles((props: Theme) => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border.main}`,
    padding: theme.spacing(3),
    overflowX: "hidden",
  },
}))(Box);

export const useStyles = makeStyles((theme: Theme) => ({
  swipPaper: {
    width: "50%",
    boxShadow: "none",
    paddingBottom: 75,
    [theme.breakpoints.down(640)]: {
      width: "100%",
    },
  },
  swipeableDrawer: {
    zIndex: 1100,
    transform: "translateY(75px)",
  },
  modal: {
    zIndex: 1100,
  },
}));

export const ThirdText = withStyles((props: Theme) => ({
  root: {
    color: theme.palette.violet.main,
    marginLeft: theme.spacing(1),
    fontSize: 13,
    fontWeight: 500,
  },
}))(Typography);
