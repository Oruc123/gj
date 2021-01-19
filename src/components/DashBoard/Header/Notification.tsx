import { Badge, IconButton } from "@material-ui/core";
import React from "react";
import { IBell } from "../../Icons";
import { useStyles } from "./Atom";
const Notification = () => {
  const classes = useStyles();
  return (
    <IconButton style={{ padding: 0 }}>
      <Badge
        classes={{ dot: classes.dot }}
        style={{ height: "auto" }}
        variant="dot"
      >
        <IBell size={18} />
      </Badge>
    </IconButton>
  );
};

export default Notification;
