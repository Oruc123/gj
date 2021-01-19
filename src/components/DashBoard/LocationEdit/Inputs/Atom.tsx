import {
  Box,
  withStyles,
  OutlinedInput,
  makeStyles,
  createStyles,
  styled,
} from "@material-ui/core/";

export const FormGroup = withStyles({
  root: {
    "& label": {
      fontSize: 14,
      display: "block",
      marginBottom: 8,
      fontWeight: 400,
    },
  },
})(Box);

export const StyledInput = withStyles({
  root: {
    height: 40,
    fontSize: 14,
    borderRadius: 3,
    fontWeight: 400,
    boxSizing: "border-box",
    padding: "8px ",
  },
})(OutlinedInput);

export const useStyles = makeStyles(
  (theme: { palette: { violet: { main: string } } }) => {
    return createStyles({
      color: {
        color: theme.palette.violet.main,
        fontSize: 14,
      },
    });
  }
);
