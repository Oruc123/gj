import { Button } from "@material-ui/core";
import React from "react";

interface IButton {
  label: string;
  clickHandler?: () => void;
  startIcon?: React.ReactNode;
  disabled?: boolean;
}

export const GButtonContained: React.FC<IButton> = ({
  label,
  clickHandler,
  startIcon,
  disabled = false,
}) => {
  return (
    <Button
      disableFocusRipple
      disableRipple
      disabled={disabled}
      startIcon={startIcon}
      onClick={clickHandler}
    >
      {label}
    </Button>
  );
};
