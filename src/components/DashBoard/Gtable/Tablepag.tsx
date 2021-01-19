import {
  Box,
  MenuItem,
  Typography,
  IconButton,
  Button,
  Paper,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 56,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 16px",
    },
    tuscle: {
      color: theme.palette.tuscle.light,
    },
    selecticon: {
      color: theme.palette.tuscle.light,
      right: "-8px",
    },
    selectButton: {
      padding: 0,

      "&:hover": {},
    },
    dropDown: {
      position: "absolute",
      left: 0,
      top: 30,
    },
  })
);

const TablePag = () => {
  const wrapperRef: any = React.useRef(null);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
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
    <Box className={classes.root}>
      <Box display="flex" alignItems="center">
        <Typography style={{ marginRight: 3, fontSize: 14 }} variant="body2">
          Show:
        </Typography>

        <div ref={wrapperRef}>
          <Box display="flex" alignItems="center" position="relative">
            <Button
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon style={{ color: " #A6B5DC" }} />}
              className={classes.selectButton}
            >
              10
            </Button>
            {open && (
              <Box className={classes.dropDown}>
                <Paper>
                  <MenuItem onClick={handleClickClose}>20</MenuItem>
                  <MenuItem onClick={handleClickClose}>20</MenuItem>
                  <MenuItem onClick={handleClickClose}>20</MenuItem>
                </Paper>
              </Box>
            )}
          </Box>
        </div>
        <Typography style={{ marginLeft: 30, fontSize: 14 }} variant="body2">
          from:
          <Typography
            component="span"
            style={{ fontSize: 14, marginLeft: 5 }}
            variant="h2"
          >
            7600
          </Typography>
        </Typography>
      </Box>
      <Box marginLeft="auto" display="flex" alignItems="center">
        <IconButton>
          <ArrowBackIosRoundedIcon
            style={{ fontSize: 16 }}
            className={classes.tuscle}
          />
        </IconButton>
        <Typography style={{ marginLeft: 10, fontSize: 14 }} variant="body2">
          1
        </Typography>
        <Typography
          style={{ marginLeft: 15, fontSize: 10 }}
          className={classes.tuscle}
          variant="body2"
        >
          /
        </Typography>
        <Typography style={{ marginLeft: 10, fontSize: 14 }} variant="body2">
          100
        </Typography>
        <IconButton>
          <ArrowForwardIosRoundedIcon
            style={{ fontSize: 16 }}
            className={classes.tuscle}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TablePag;
