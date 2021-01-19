import React from "react";
import {
  makeStyles,
  Theme,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core/";
import { IChevronDown, IGoogle } from "../../Icons";

const useStyle = makeStyles((theme: Theme) => ({
  root: {
    padding: "0",
    backgroundColor: "#F1F3FC",
    borderRadius: 4,
    color: theme.palette.primary.main,
    display: "inline-flex",
    alignItems: "center",
    float: "right",
    justifyContent: "space-between",
    position: "relative",
    [theme.breakpoints.down(640)]: {
      float: "none",
      marginTop: 12,
    },
  },
  iconBox: {
    borderLeft: `1px solid ${theme.palette.border.main}`,
    margin: theme.spacing(0.4, 0),
    marginLeft: 16,
    padding: theme.spacing(0.6),
  },
  iconButton: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));

const GSelect = () => {
  const classes = useStyle();
  return (
    <>
      <Box className={classes.root}>
        <Box marginRight={1} marginLeft={3}>
          <IGoogle />
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="span"
            style={{ fontSize: 13 }}
            color="primary"
          >
            Google My Bussines
          </Typography>
        </Box>
        <Box className={classes.iconBox}>
          <IconButton className={classes.iconButton} disableRipple>
            <IChevronDown size={24} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default GSelect;
