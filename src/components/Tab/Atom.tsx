import React from "react";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Tab, Tabs } from "@material-ui/core/";

interface StyledTabProps {
  label: string;
  tabIndex: number;
}

interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

export const StyledTabs = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 45,
      borderBottom: "1px solid #F3F5FA",
    },
    indicator: {
      width: "98%",
      borderRadius: 14,
      backgroundColor: theme.palette.primary.main,
    },
  })
)((props: StyledTabsProps) => <Tabs {...props} />);

export const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: theme.palette.primary.main,
      opacity: 1,
      padding: 0,
      paddingBottom: 15,
      fontSize: 14,
      fontWeight: 700,
      minWidth: "auto",
      marginRight: theme.spacing(4),
      "& > span": {
        display: "inline",
        textAlign: "left",
      },
      "&$selected": {
        color: "#000",
      },
    },

    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

export const StyledTabsD = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 0,
    },
    flexContainer: {
      justifyContent: "flex-end",
    },
    indicator: {
      width: "98%",
      borderRadius: 14,
      backgroundColor: theme.palette.primary.main,
    },
  })
)((props: StyledTabsProps) => <Tabs {...props} />);
export const AntTabD = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      color: theme.palette.primary.main,
      opacity: 1,
      padding: 0,
      paddingBottom: theme.spacing(0),
      fontSize: 14,
      fontWeight: 700,
      minWidth: "auto",
      marginRight: theme.spacing(4),
      "& > span": {
        display: "inline",
        textAlign: "left",
      },
      "&$selected": {
        color: "#000",
      },
    },

    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);
