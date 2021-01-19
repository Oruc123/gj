import React from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  InputBase,
} from "@material-ui/core";
import { useStyles } from "./Atom";
import { ISearch } from "../../Icons";
import { Grid as GridIcon, Plus } from "react-feather";
import { ctx } from "../../../context";
import clsx from "clsx";
export const DropDownWrapper = ({
  children,
  top,
  mobile,
}: {
  children: React.ReactNode;
  top?: boolean;
  mobile?: boolean;
}) => {
  const classes = useStyles();
  return (
    <Box
      className={clsx(
        top ? classes.dropDownWrapper2 : classes.dropDownWrapper,
        mobile ? classes.dropDownSidebarMobile : null
      )}
    >
      <List disablePadding component="nav">
        {children}
      </List>
    </Box>
  );
};
export const DropDownCreate = ({ mobile }: { mobile?: boolean }) => {
  // clsx(
  //   classes.iconButton,
  //   mobile ? classes.mobileBetween : null
  // )
  const classes = useStyles();
  return (
    <DropDownWrapper mobile={mobile ? true : false}>
      <ListItem disableRipple className={classes.listItem} button>
        <ListItemText classes={{ primary: classes.listItemText }}>
          New location
        </ListItemText>
      </ListItem>
      <ListItem disableRipple className={classes.listItem} button>
        <ListItemText classes={{ primary: classes.listItemText }}>
          New location group
        </ListItemText>
      </ListItem>
      <ListItem disableRipple className={classes.listItem} button>
        <ListItemText classes={{ primary: classes.listItemText }}>
          Import data
        </ListItemText>
      </ListItem>
    </DropDownWrapper>
  );
};

export const DropDownItem = ({ text }: { text: string }) => {
  const classes = useStyles();
  return (
    <ListItem disableRipple className={classes.listItem} button>
      <ListItemText classes={{ primary: classes.listItemText3 }}>
        {text}
      </ListItemText>
    </ListItem>
  );
};

export const DropDownProjects = () => {
  const classes = useStyles();
  const { openCreateProject } = React.useContext(ctx);
  return (
    <DropDownWrapper top>
      <ListItem className={classes.listItem}>
        <InputBase />
        <Box alignItems="center" marginTop={0.4} flex={1} marginLeft={1}>
          <ISearch />
        </Box>
      </ListItem>
      <ListItem disableRipple className={classes.listItem} button>
        <ListItemIcon className={classes.listItemIcon}>
          <GridIcon size={16} color="#283BC1" />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.listItemTextPr }}>
          All projects
        </ListItemText>
      </ListItem>
      <ListItem disableRipple className={classes.listItem} button>
        <ListItemText classes={{ primary: classes.listItemText2 }}>
          McDonald's
        </ListItemText>
      </ListItem>
      <ListItem disableRipple className={classes.listItem} button>
        <ListItemText classes={{ primary: classes.listItemText2 }}>
          Delivery Club
        </ListItemText>
      </ListItem>
      <ListItem disableGutters className={classes.listItemNew}>
        <Button
          className={classes.listItemButton}
          classes={{ label: classes.buttonLabel }}
          color="primary"
          fullWidth
          variant="contained"
          startIcon={<Plus size={16} />}
          onClick={openCreateProject}
        >
          New project
        </Button>
      </ListItem>
    </DropDownWrapper>
  );
};
