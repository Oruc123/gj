import { makeStyles, createStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",

      [theme.breakpoints.up(600)]: {
        height: "100%",
      },
      [theme.breakpoints.down(600)]: {
        marginBottom: 8,
      },
    },
    paper: {
      textAlign: "center",
      padding: theme.spacing(2),
      border: `1px solid ${theme.palette.border.main}`,
      background: "#fff",
      [theme.breakpoints.up(600)]: {
        padding: theme.spacing(3),
        paddingBottom: 8,
        height: "100%",
      },

      [theme.breakpoints.down(600)]: {
        textAlign: "left",
      },
    },
    mobileButton: {
      [theme.breakpoints.down(600)]: {
        display: "flex",
        marginTop: 8,
        alignItems: "center",
        "& > div": {
          marginTop: 0,
          marginBottom: 0,
        },
        "& > div:first-child": {
          transform: "translateY(3px)",
        },
        "& > div:last-child": {
          flex: 1,
        },
      },
    },
    openButton: {
      zIndex: 3,
      "&:hover": {
        background: "transparent",
      },
    },
    label: {
      fontSize: 14,
      [theme.breakpoints.down(600)]: {
        textAlign: "left",
        marginRight: "auto",
        display: "inline",
        marginLeft: 4,
      },
    },
    buttonincon: {
      position: "relative",
      zIndex: 0,
      marginLeft: "auto",
    },
  })
);
