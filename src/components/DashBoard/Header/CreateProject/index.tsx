import { Button, Box, IconButton } from "@material-ui/core";
import React, { useState, useRef, useEffect } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useStyles } from "./Atom";
import { DropDownCreate } from "../../DropDown";
import { IChevronDown, IChevronUp, IPlus } from "../../../Icons";
import clsx from "clsx";

interface ICreateProjectButton {
  color: "inherit" | "primary" | "secondary" | "default";
  label: string;
  startIcon?: boolean;
}

export const CreateProjectButton: React.FC<ICreateProjectButton> = ({
  color,
  label,
  startIcon,
}) => {
  const classes = useStyles();
  return (
    <>
      <Button
        style={{ fontSize: 16 }}
        disableRipple
        color={color}
        classes={{
          root: classes.button,
        }}
        startIcon={
          startIcon && <AddBoxIcon style={{ fontSize: 28 }} color="primary" />
        }
      >
        {label}
      </Button>
      <IconButton className={classes.iconButton}>
        <KeyboardArrowDownIcon style={{ fontSize: 20 }} color="secondary" />
      </IconButton>
    </>
  );
};

const CreateProject = ({ mobile }: { mobile?: boolean }) => {
  const wrapperRef: any = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
  const openDropdown = (): void => {
    setOpen(!isOpen);
  };
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef?.current.contains(event.target)) {
        event.stopPropagation();
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef}>
      <Box
        display="flex"
        alignItems="center"
        width="100%"
        height="100%"
        onClick={openDropdown}
        style={{ cursor: "pointer" }}
      >
        <Button
          color="default"
          classes={{
            root: classes.button,
          }}
          startIcon={<IPlus />}
        >
          Create
        </Button>
        <IconButton
          onClick={openDropdown}
          style={{ marginLeft: "auto" }}
          className={clsx(
            classes.iconButton,
            mobile ? classes.mobileBetween : null
          )}
        >
          {!isOpen && <IChevronDown size={14} />}
          {isOpen && <IChevronUp size={14} />}
        </IconButton>
        {isOpen && (
          <>
            {mobile && <DropDownCreate mobile />}
            {!mobile && <DropDownCreate />}
          </>
        )}
      </Box>
    </div>
  );
};
export default CreateProject;
