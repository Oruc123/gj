import React, { useState, useRef, useEffect } from "react";
import { Typography, Button } from "@material-ui/core/";
import { useStyle } from "./Atom";
import { DropDownProjects } from "../DropDown";
import { IChevronDown, IChevronUp } from "../../Icons";
const GSelect = () => {
  const classes = useStyle();
  const [isOpen, setOpen] = useState(false);
  const openDropdown = (): void => {
    setOpen(!isOpen);
  };
  const wrapperRef: any = useRef(null);
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
    <div ref={wrapperRef} className={classes.wrapper}>
      <Button
        onClick={openDropdown}
        classes={{
          root: classes.buttonRoot,
          label: classes.buttonLabel,
          endIcon: classes.endIcon,
        }}
        endIcon={!isOpen ? <IChevronDown /> : <IChevronUp />}
      >
        Starbuck
      </Button>
      <Typography className={classes.label} variant="body1">
        Project
      </Typography>
      <div ref={wrapperRef}>{isOpen && <DropDownProjects />}</div>
    </div>
  );
};

export default GSelect;
