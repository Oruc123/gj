import { Link, List, Typography, ListItem } from "@material-ui/core";
import React from "react";
import CPaper from "../../../Elements/CPaper";
import PublicIcon from "@material-ui/icons/Public";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import useStyles from "./Atom";
import CToolTip from "./CToolTip";
const Statics = () => {
  const classes = useStyles();

  return (
    <CPaper height>
      <Typography variant="h2">Hermitage Square</Typography>
      <List className={classes.infoRoot} disablePadding>
        <ListItem disableGutters>
          <RoomOutlinedIcon className={classes.listIcon} />
          <Link className={classes.listLink} href="#">
            Baumana street 51, Kazan, TA 420111
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <PublicIcon className={classes.listIcon} />
          <Link className={classes.listLink} href="#">
            www.starbucks.com
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <PhoneOutlinedIcon className={classes.listIcon} />
          <Link className={classes.listLink} href="#">
            +375 231 541 12
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <QueryBuilderOutlinedIcon className={classes.listIcon} />
          <Link className={classes.listLink} href="#">
            Open: 10:00 – 22:00
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <CToolTip />
        </ListItem>
      </List>
    </CPaper>
  );
};
export default Statics;
