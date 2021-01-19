import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    tableHead: {
      padding: "16px 24px",
      borderTop: `1px solid ${theme.palette.border.main}`,
      borderBottom: `1px solid ${theme.palette.border.main}`,
      marginBottom: 6,
      "& p": {
        color: "#666",
      },
    },
    tableRow: {
      padding: theme.spacing(1.5, 3),
      background: "#fff",
      [theme.breakpoints.down(1025)]: {
        padding: theme.spacing(1, 3),
        "&:last-child": {
          marginBottom: 6,
        },
      },
    },
    upIcon: {
      color: theme.palette.secondary.light,
      marginRight: theme.spacing(1),
      transform: "translateY(7px)",
      fontSize: 24,
    },
    redIcon: {
      color: "#A74343",
    },
  })
);
export default useStyles;
