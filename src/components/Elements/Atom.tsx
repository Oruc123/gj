import React from "react";

interface IButton {
  label: string;
  onClick?: () => {};
  startIcon?: React.ReactNode;
  disabled?: boolean;
}
