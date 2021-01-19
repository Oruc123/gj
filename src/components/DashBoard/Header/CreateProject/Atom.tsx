import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      marginRight: 20,
      padding: 0,
      paddingLeft: 4,
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    iconButton: {
      padding: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    mobileBetween: {
      marginLeft: "auto",
    },
  })
);
