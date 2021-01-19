import { Button } from "@material-ui/core";
import HighlightOffRoundedIcon from "@material-ui/icons/HighlightOffRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    iconButton: {
      marginLeft: "auto",
      padding: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    icon: {
      color: theme.palette.violet.main,
    },
  })
);

export const ClearButton = () => {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      className={classes.iconButton}
      startIcon={<HighlightOffRoundedIcon className={classes.icon} />}
    >
      Clear
    </Button>
  );
};
export const AddButton = ({ handleClick }: { handleClick?: () => void }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={handleClick}
      disableRipple
      className={classes.iconButton}
      startIcon={<AddCircleOutlineRoundedIcon className={classes.icon} />}
    >
      Add
    </Button>
  );
};
export const HideButton = () => {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      className={classes.iconButton}
      startIcon={<HighlightOffRoundedIcon className={classes.icon} />}
    >
      Clear
    </Button>
  );
};
