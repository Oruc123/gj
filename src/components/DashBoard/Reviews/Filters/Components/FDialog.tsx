import {
  Dialog,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GSearch from "../../../GSearch";
import GCheckboxes from "./GCheckboxes";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      maxWidth: 411,
    },
    cancel: {
      padding: "9px 16px",
      background: "#F5F6FA",
    },
    actionsWrapper: {
      justifyContent: "flex-start",
      marginTop: theme.spacing(1),
      padding: theme.spacing(2),
    },
    closeRoot: {
      color: theme.palette.tuscle.dark,
    },
    backDrop: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      zIndex: 0,
      position: "fixed",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  })
);
const FDialog = ({
  handleClose,
  children,
  open,
}: {
  open: boolean;
  children?: React.ReactNode;
  handleClose: () => void;
}) => {
  const styles = useStyles();
  const Backdrop = () => {
    const styles = useStyles();
    return <span onClick={handleClose} className={styles.backDrop}></span>;
  };
  return (
    <Dialog
      BackdropComponent={Backdrop}
      onBackdropClick={handleClose}
      fullWidth={true}
      classes={{ paperFullWidth: styles.fullWidth }}
      open={open}
      onClose={handleClose}
    >
      <Box borderBottom="1px solid #E6E9F5" padding={3}>
        <Box
          marginBottom={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography style={{ fontSize: 15 }} variant="h4">
            Locations
          </Typography>
          <Box marginLeft="auto" marginRight={1}>
            <Typography variant="body2">Selected: 1</Typography>
          </Box>
          <Box>
            <Button
              color="primary"
              disableElevation
              disableFocusRipple
              disableRipple
            >
              Clear
            </Button>
          </Box>
          <Box marginLeft={2}>
            <IconButton onClick={handleClose} className={styles.closeRoot}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
        </Box>
        <Box borderRadius={3} border="1px solid #E5E8F0">
          <GSearch />
        </Box>
      </Box>
      <Box paddingX={3} paddingY={2}>
        <Box marginBottom={1}>
          <GCheckboxes label="Hermitage Square" />
          <Box marginTop="-8px" paddingLeft={3}>
            <Typography variant="body2">11260 Groat Road</Typography>
          </Box>
        </Box>
        <Box marginBottom={1}>
          <GCheckboxes label="Hermitage Square" />
          <Box marginTop="-8px" paddingLeft={3}>
            <Typography variant="body2">11260 Groat Road</Typography>
          </Box>
        </Box>
        <Box marginBottom={1}>
          <GCheckboxes label="Hermitage Square" />
          <Box marginTop="-8px" paddingLeft={3}>
            <Typography variant="body2">11260 Groat Road</Typography>
          </Box>
        </Box>
        <Box marginBottom={1}>
          <GCheckboxes label="Hermitage Square" />
          <Box marginTop="-8px" paddingLeft={3}>
            <Typography variant="body2">11260 Groat Road</Typography>
          </Box>
        </Box>
        <Box marginBottom={1}>
          <GCheckboxes label="Hermitage Square" />
          <Box marginTop="-8px" paddingLeft={3}>
            <Typography variant="body2">11260 Groat Road</Typography>
          </Box>
        </Box>
      </Box>
      <DialogActions className={styles.actionsWrapper}>
        <Button
          onClick={handleClose}
          disableElevation
          color="primary"
          variant="contained"
        >
          Confirm
        </Button>
        <Button onClick={handleClose} className={styles.cancel} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default FDialog;
