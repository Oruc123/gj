import { List, Box, IconButton } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Atom";
import { useLocation } from "react-router-dom";
import LocationDialog from "../LocationContent/LocationDialog";
import { ctx } from "../../../context";
import { IClose } from "../../Icons";
import GMenuList from "./GMenuList";
import CreateProject from "../Header/CreateProject";
import HAvatar from "../Header/HAvatar";
import Notification from "../Header/Notification";
import LocationNav from "./LocationNav";
const DrawerContent = () => {
  const classes = useStyles();
  const { closeDrawer, mobile, tablet } = React.useContext(ctx);
  const close = () => {
    if (closeDrawer) closeDrawer();
  };
  const { pathname } = useLocation();
  let isLocation =
    pathname === "/location" || pathname === "/edit" || pathname === "/reviews"
      ? true
      : false;
  const [isOpen, setOpen] = React.useState(false);
  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [isOpen]);
  const handleOver = () => {};
  const handleOut = () => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    document.body.style.paddingRight = "0px";
  };
  return (
    <>
      {isOpen && <LocationDialog open={isOpen} handleClose={handleClose} />}
      <>
        {tablet && <div className={classes.toolbar}></div>}
        {!tablet && (
          <>
            <Box className={classes.mobileAtom}>
              <Notification />
              <Box marginLeft="auto">
                <IconButton
                  disableFocusRipple
                  disableRipple
                  style={{ padding: 0 }}
                  onClick={close}
                >
                  <IClose />
                </IconButton>
              </Box>
            </Box>
            <Box className={classes.mobileAtom}>
              <Box position="relative" paddingLeft={1} width="100%">
                <CreateProject mobile />
              </Box>
            </Box>

            <Box className={classes.mobileAtom}>
              <Box height="100%" width="100%">
                <HAvatar />
              </Box>
            </Box>
          </>
        )}

        <Box onMouseOver={handleOver} onMouseOut={handleOut}>
          <List>
            {isLocation && mobile && <LocationNav />}

            <GMenuList />
          </List>
        </Box>
      </>
    </>
  );
};
export default DrawerContent;
