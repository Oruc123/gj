import { makeStyles, createStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      borderRadius: 0,
      position: "relative",
      border: `1px solid ${theme.palette.border.main}`,
      padding: theme.spacing(3),
      background: "#fff",
      [theme.breakpoints.down(600)]: {
        padding: 16,
      },
    },
    progress: {
      color: theme.palette.success.main,
      position: "relative",
      paddingLeft: "24px",
    },
    increase: {
      color: theme.palette.secondary.dark,
      position: "relative",
      paddingLeft: "32px",
    },
    icon: {
      fontSize: 24,
      position: "absolute",
      left: "-5px",
      top: "-4px",
    },
    chartBlock: {
      position: "absolute",
      right: -38,
      bottom: -31,
    },
    shadow: {
      // left: "0",
      // bottom: 30,
      // height: "50%",
      // zIndex: 0,
      // width: "100%",
      // background: "linear-gradient(90deg,hsla(0,0%,100%,0),#fff 60%)",
      // position: "absolute",
    },
    dropButton: {
      color: theme.palette.primary.light,
      padding: 0,
      paddingLeft: 6,
      marginBottom: 3,
      fontSize: 18,
      fontWeight: 700,
      "&:hover": {
        background: "transparent",
      },
    },
  })
);
