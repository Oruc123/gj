import { makeStyles, createStyles, Theme } from "@material-ui/core";

const drawerWidth = 220;

export const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        overflowY: "hidden",
        paddingBottom: 60,
        "&:hover": {
          overflowY: "auto",
        },
      },
    },
    drawerPaper: {
      zIndex: 1200,
      width: drawerWidth,
      borderRight: ` 1px solid ${theme.palette.border.main}`,
    },
    toolbar: {
      ...theme.mixins.toolbar,
    },
    content: {
      minHeight: "90vh",
      flexGrow: 1,
      maxWidth: "100%",
      overflowX: "hidden",
      overflowY: "hidden",
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      [theme.breakpoints.down(1025)]: {
        padding: 13,
      },
      [theme.breakpoints.down(768)]: {
        padding: 8,
        paddingBottom: 140,
        paddingTop: 13,
      },
    },
    link: {
      fontWeight: 700,
      fontSize: 13,
      textDecoration: "none",
      textTransform: "capitalize",
      "&:hover": {
        color: "#000",
      },
    },
    backButton: {
      fontWeight: 700,
      width: "100%",
      height: 49,
      background: "#EFF1F8",
      fontSize: 13,
      textDecoration: "none",
      textTransform: "capitalize",
      borderRadius: 0,
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(2),
      border: `1px solid ${theme.palette.border.main}`,
      "&:hover": {
        color: "#000",
      },
      [theme.breakpoints.down(600)]: {
        marginBottom: 0,
      },
    },
    backButtonLabel: {
      justifyContent: "flex-start",

      paddingLeft: theme.spacing(1),
    },
    icon: {
      color: "#6C82AC",
      marginRight: "5px",
    },
    listHead: {
      fontWeight: 700,
      fontSize: 13,
      paddingLeft: 5,
      marginTop: 8,
    },
    listitem: {
      paddingTop: 0,
      paddingBottom: 0,
    },

    projectListButton: {
      padding: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    projectListLabel: {
      fontSize: 18,
      fontWeight: 700,
      justifyContent: "space-between",
      textTransform: "capitalize",
    },
    check: {
      color: "#55AE35",
      fontSize: 24,
      marginRight: "auto",
      marginLeft: 15,
    },
    decsription: {
      alignItems: "flex-start",
      marginBottom: theme.spacing(2),
    },
    mobileAtom: {
      padding: 16,
      borderBottom: `1px solid ${theme.palette.border.main}`,
      "&:first-of-type": {
        display: "flex",
        alignItems: "center",
        padding: 16,
      },
    },
    mobileDrawer: {
      [theme.breakpoints.down(600)]: {
        width: "100%",
      },
    },
  });
});
