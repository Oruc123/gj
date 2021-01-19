import {
  AppBar,
  InputBase,
  Box,
  IconButton,
  Avatar,
  withWidth,
} from "@material-ui/core";
import Notification from "./Notification";
import React from "react";
import { useStyles } from "./Atom";
import { ReactComponent as Logo } from "../../../assets/img/logo.svg";
import GSelect from "../GSelect/indext";
import CreateProject from "./CreateProject";
import { NavLink } from "react-router-dom";
import { IMenu, ISearch } from "../../Icons";
import { ctx } from "../../../context";
const Header = () => {
  const { openDrawer, tablet, mobile } = React.useContext(ctx);
  const classes = useStyles();
  const open = () => {
    if (openDrawer) {
      openDrawer();
    }
  };
  return (
    <AppBar
      color="default"
      className={classes.appBar}
      elevation={0}
      position="fixed"
    >
      <Box className={classes.header}>
        <Box className={classes.logoContainer}>
          <Box className={classes.logo}>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </Box>
          <Box className={classes.createProject}>
            <GSelect />
          </Box>
        </Box>
        <Box className={classes.headerNav}>
          {tablet && (
            <Box paddingLeft={3.5} className={classes.headerItem}>
              <CreateProject />
            </Box>
          )}

          <Box marginLeft={1} className={classes.searchBox}>
            <ISearch />
            {tablet && (
              <>
                <InputBase
                  style={{ paddingLeft: 8 }}
                  className={classes.input}
                  placeholder="Search "
                  inputProps={{ "aria-label": "search " }}
                />
                <Notification />
              </>
            )}
          </Box>
        </Box>
        <Box className={classes.md}>
          {tablet && <Avatar className={classes.avatar}>MD</Avatar>}
          {!tablet && (
            <IconButton onClick={open}>
              <IMenu />
            </IconButton>
          )}
        </Box>
      </Box>
    </AppBar>
  );
};
export default withWidth()(Header);
