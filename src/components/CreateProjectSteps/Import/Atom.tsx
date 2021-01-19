import { makeStyles, createStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 651,
      margin: "0 auto",
      [theme.breakpoints.down(1366)]: {
        maxWidth: 480,
      },
      [theme.breakpoints.down(1024)]: {
        maxWidth: 489,
      },
    },
    tableRoot: {
      minWidth: 431,
      borderBottom: "1px solid #E0E1E6",
    },
    tableWrapper: {
      [theme.breakpoints.down(640)]: {
        overflowX: "scroll",
      },
    },
    tableHeadButton: {
      flexShrink: 0,
      paddingRight: 0,
      paddingLeft: 11,
      fontWeight: 400,
      maxWidth: 260,
      textAlign: "left",
      lineHeight: 1.2,
      "&:hover": {
        background: "transparent",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "24px!important",
      },
      "& .MuiButton-endIcon": {
        color: "#7E92B6",
        marginLeft: 16,
      },
    },
    checkbox: {
      marginRight: "0",
      "& .MuiCheckbox-root": {
        marginRight: 10,
      },
    },
  })
);
