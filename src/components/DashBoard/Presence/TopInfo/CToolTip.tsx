import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@material-ui/core/";
import useStyles from "./Atom";
import TooltipContent from "./ToolTipContent";
export default function CToolTip() {
  const classes = useStyles();

  return (
    <Tooltip
      interactive
      placement="top"
      classes={{ tooltip: classes.toolTip }}
      arrow
      title={
        <>
          <TooltipContent />
        </>
      }
    >
      <Link href="#" className={classes.toolTipLink}>
        Other days
      </Link>
    </Tooltip>
  );
}
