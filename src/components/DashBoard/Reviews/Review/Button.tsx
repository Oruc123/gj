import { Button } from "@material-ui/core";
import React from "react";
import { useStyles } from "./ReviewContent";
interface IReviewButtons {
  label: string;
  icon: React.ReactNode;
}
export const ReviewButtons: React.FC<IReviewButtons> = ({ label, icon }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.buttons}
      startIcon={icon}
      disableElevation
      disableFocusRipple
      disableRipple
    >
      {label}
    </Button>
  );
};
