import { Drawer, SwipeableDrawer } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Atom";
import DrawerContent from "./DrawerContent";
import { ctx } from "../../../context";
const DrawerMenu = () => {
  const classes = useStyles();
  const {
    openDrawer,
    closeDrawer,
    mobileDrawer,
    mobile,
    tablet,
  } = React.useContext(ctx);
  const open = () => {
    if (openDrawer) openDrawer();
  };
  const close = () => {
    if (closeDrawer) closeDrawer();
  };
  if (tablet) {
    return (
      <>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <DrawerContent />
        </Drawer>
      </>
    );
  }

  return (
    <SwipeableDrawer
      classes={{ paper: classes.mobileDrawer }}
      onClose={close}
      onOpen={open}
      anchor="left"
      open={mobileDrawer || false}
    >
      <DrawerContent />
    </SwipeableDrawer>
  );
};
export default DrawerMenu;
