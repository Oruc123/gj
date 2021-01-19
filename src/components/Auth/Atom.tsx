import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
export const ButtonBox = withStyles({
  root: {
    borderTop: "1px solid #F3F5FA",
    paddingTop: 16,
    marginTop: 24,
  },
})(Box);

export const useStyles = makeStyles({
  icon: {
    color: "#E5E8F0",
    borderRadius: 13,
  },
});
