import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      height: 56,
      zIndex: 1201,
    },
    header: {
      background: "#fff",
      padding: 0,
      height: "100%",
      boxShadow: "none",
      borderBottom: ` 1px solid ${theme.palette.border.main}`,
      display: "flex",
      alignItems: "center",
    },
    logoContainer: {
      width: 220,
      height: "100%",
      borderRight: ` 1px solid ${theme.palette.border.main}`,
      display: "flex",
      flexDirection: "row",
      zIndex: 4400,
      position: "relative",
      [theme.breakpoints.down(1024)]: {
        width: "auto",
        flex: 1,
      },
    },
    logo: {
      position: "relative",
      zIndex: 20000,
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "56px",
      paddingTop: 8,
      borderRight: ` 1px solid ${theme.palette.border.main}`,
    },
    createProject: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    headerNav: {
      height: "100%",
      flex: 1,
      display: "flex",
      padding: "17px 0",
      alignItems: "center",
      boxSizing: "border-box",
      borderRight: ` 1px solid ${theme.palette.border.main}`,
      [theme.breakpoints.down(1024)]: {
        flex: 0,
      },
    },
    headerItem: {
      display: "flex",
      alignItems: "center",
      borderRight: ` 1px solid ${theme.palette.border.main}`,
      paddingRight: 15,
      position: "relative",
      width: 145,
    },
    button: {
      padding: 0,
    },
    searchBox: {
      paddingRight: 16,
      paddingLeft: 8,
      display: "flex",
      flex: 1,
      alignItems: "center",
    },
    input: {
      flex: 1,
    },
    iconButton: {
      color: "#6C82AC",
      padding: theme.spacing(1),
    },
    md: {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      width: 55,
    },
    dot: {
      background: "#EB5757",
    },
    avatar: {
      background: "#B3C0D9",
      borderRadius: 3,
      fontSize: 10,
      fontWeight: 900,
      width: 24,
      height: 24,
    },
    bell: {
      fontSize: 18,
      color: theme.palette.tuscle.dark,
    },
  })
);
