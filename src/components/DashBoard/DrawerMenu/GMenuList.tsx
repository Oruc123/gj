import { ListItem, Typography } from "@material-ui/core";

import React from "react";
import { useStyles } from "./Atom";
import { useHistory } from "react-router-dom";
import GMenuItem from "./GMenuItem";
import { IDashBoard } from "../../Icons";
import {
  Map,
  Camera,
  Grid,
  ShoppingCart,
  Trello,
  Bell,
  Globe,
  Repeat,
  ThumbsUp,
  MessageSquare,
  User,
  Activity,
  Star,
  Compass,
  Send,
} from "react-feather";
const GMenuList = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <GMenuItem
        handleClick={() => history.push("/edit")}
        active
        icon={<IDashBoard />}
        label="Dasboard"
      />
      <GMenuItem
        handleClick={() => history.push("/location")}
        icon={<Map size={16} />}
        label="Locations"
      />

      <ListItem style={{ paddingLeft: 24 }}>
        <Typography className={classes.listHead} variant="body1">
          Content
        </Typography>
      </ListItem>
      <GMenuItem
        handleClick={() => history.push("/reviews")}
        icon={<Camera size={16} />}
        label="Media"
      />
      <GMenuItem icon={<Grid size={16} />} label="Services" />
      <GMenuItem icon={<ShoppingCart size={16} />} label="Products" />
      <GMenuItem icon={<Trello size={16} />} label="Posts" />
      <GMenuItem
        handleClick={() => history.push("/presence")}
        icon={<Globe size={16} />}
        label="Presence"
      />
      <ListItem style={{ paddingLeft: 24 }}>
        <Typography className={classes.listHead} variant="body1">
          Reviews
        </Typography>
      </ListItem>
      <GMenuItem icon={<MessageSquare size={16} />} label="Managment" />
      <GMenuItem icon={<ThumbsUp size={16} />} label="Generation" />
      <GMenuItem icon={<Send size={16} />} label="Auto-reply" />
      <ListItem style={{ paddingLeft: 24 }}>
        <Typography className={classes.listHead} variant="body1">
          Analytics
        </Typography>
      </ListItem>
      <GMenuItem icon={<Activity size={16} />} label="Traffic" />
      <GMenuItem icon={<Star size={16} />} label="Rating" />
      <GMenuItem icon={<Compass size={16} />} label="Competiors" />
      <ListItem style={{ paddingLeft: 24 }}>
        <Typography className={classes.listHead} variant="body1">
          Settings
        </Typography>
      </ListItem>
      <GMenuItem icon={<User size={16} />} label="Users" />
      <GMenuItem icon={<Bell size={16} />} label="Notifications" />
      <GMenuItem icon={<Repeat size={16} />} label="Integrations" />
    </>
  );
};
export default GMenuList;
