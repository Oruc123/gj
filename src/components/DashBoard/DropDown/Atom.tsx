import { makeStyles, createStyles, Theme } from "@material-ui/core";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropDownWrapper: {
      position: "absolute",
      left: 0,
      top: "40px",
      width: "156px",
      maxWidth: 240,
      border: `1px solid ${theme.palette.border.main}`,
      borderBottom: "none",
      background: "#fff",
      zIndex: 20000,
      [theme.breakpoints.down("md")]: {
        // top: "48.5px",
      },
    },
    dropDownSidebarMobile: { top: "41px" },
    dropDownWrapper2: {
      position: "absolute",
      right: 0,
      maxWidth: 240,
      top: "100%",
      width: "100%",
      border: `1px solid ${theme.palette.border.main}`,
      background: "#fff",
      zIndex: 20000,
    },
    listItem: {
      borderBottom: `1px solid ${theme.palette.border.main}`,
      "&:hover": {
        background: " #F5F7FF",
      },
    },
    listItemNew: { padding: 0 },
    listItemButton: {
      height: 48,
      borderRadius: 0,
    },
    buttonLabel: {
      justifyContent: "flex-start",
    },
    listItemText: {
      color: theme.palette.primary.main,
      fontSize: 13,
      fontWeight: 700,
    },
    listItemText2: {
      fontSize: 14,
      fontWeight: 700,
    },
    listItemText3: {
      fontSize: 14,
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
    listItemTextPr: {
      fontSize: 16,
      fontWeight: 700,
      color: theme.palette.primary.main,
    },

    listItemIcon: {
      minWidth: 24,
    },
  })
);
