import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Box, Button, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      maxWidth: 700,
    },
    buttonRoot: {
      fontWeight: 700,
      fontSize: 16,
      paddingLeft: 0,
      paddingRight: 0,
      "&:hover": {
        background: "transparent",
      },
    },
    closeRoot: {
      marginLeft: 10,
      color: theme.palette.tuscle.dark,
      [theme.breakpoints.down(640)]: {
        order: 1,
      },
    },
  })
);

interface ITopButtons {
  closeHandle: () => void;
}
const TopButtons: React.FC<ITopButtons> = ({ closeHandle }) => {
  const styles = useStyles();
  return (
    <Box paddingX={2} flexWrap="wrap" display="flex">
      <Button
        disableFocusRipple
        disableRipple
        className={styles.buttonRoot}
        color="primary"
        endIcon={<KeyboardArrowDownIcon style={{ color: "#B3C0D9" }} />}
      >
        New location
      </Button>
      <Box textAlign="right" marginLeft="auto">
        <Button
          startIcon={<AddRoundedIcon color="primary" />}
          disableFocusRipple
          disableRipple
          className={styles.buttonRoot}
          color="primary"
          onClick={closeHandle}
        >
          New location
        </Button>
        <IconButton onClick={closeHandle} className={styles.closeRoot}>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopButtons;
