import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoRoot: {
      marginTop: 8,
    },
    listIcon: {
      color: theme.palette.primary.light,
      marginRight: 12,
      fontSize: 16,
    },
    listLink: {
      color: "#000",
      fontWeight: 300,
      fontSize: 14,
    },
    toolTipLink: {
      fontSize: 12,
      fontWeight: 300,
      textDecoration: "underline",
      color: theme.palette.secondary.main,
      marginLeft: 30,
      display: "inline-block",
      marginTop: -12,
    },
    toolTip: {
      maxWidth: 254,
      padding: "8px 16px",
      background: theme.palette.secondary.main,
    },
    toolTipUl: {
      minWidth: 222,
    },
    toolTipLi: {
      color: "#E0E1E6",
      justifyContent: "space-between",
      padding: "4px 0",
    },
    toolTipButton: {
      color: "#fff",
      padding: 4,
      paddingLeft: 0,
      paddingRight: 0,
      borderBottom: "1px solid #fff",
      borderRadius: 0,
      marginRight: 16,
      fontSize: 14,
      fontWeight: 300,
      "&:hover": { background: "transparent" },
      "&.Mui-disabled": {
        background: "transparent",
        color: "#C7C7C7",
        borderBottom: "none",
        fontWeight: 400,
        cursor: "pointer",
      },
    },
    toolTipDay: {
      color: "#E0E1E6",
      fontSize: 14,
      fontWeight: 400,
    },
    toolTipHours: {
      color: "#E0E1E6",
      fontSize: 14,
      fontWeight: 300,
    },
    mobileFlex: {
      [theme.breakpoints.between(640, 1025)]: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 16,
        "& > div": {
          width: "40%",
          margin: 0,
          "&:last-child": {
            width: "50%",
            borderLeft: "1px solid #E0E1E6",
            paddingLeft: 24,
          },
        },
      },
    },
  })
);
export default useStyles;
