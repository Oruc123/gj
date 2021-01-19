import { Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
export const styled = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
    },
    paper: {
      background: "#fff",
      border: `1px solid ${theme.palette.border.main}`,
      boxShadow: "none",
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(2),
      borderRadius: 4,
      [theme.breakpoints.down(769)]: {
        padding: theme.spacing(2),
      },
    },
    header: {},
    itemWrapper: {
      display: "flex",
      marginTop: theme.spacing(2),
    },

    item: {
      width: "50%",
      "&:nth-child(2)": {
        borderLeft: `1px solid ${theme.palette.border.main}`,
        paddingLeft: theme.spacing(3),
        marginLeft: "-1px",
      },
    },
    subTitle: {
      fontWeight: 700,
      fontSize: 14,
      color: "#494F59",
      marginTop: theme.spacing(1),
      // [theme.breakpoints.down(768)]: {
      //   fontSize: 24,
      // },
    },
    itemContent: {
      // paddingBottom: theme.spacing(2),
    },
    borderLeft: {
      "&:nth-child(2)": {
        borderLeft: `1px solid ${theme.palette.border.main}`,
        "&>div": {
          paddingLeft: theme.spacing(2),
        },
      },
    },
    counthead: {
      fontSize: 36,
      [theme.breakpoints.down(768)]: {
        fontSize: 24,
      },
    },
    countLabel: {
      color: "#494F59",
    },
  })
);
