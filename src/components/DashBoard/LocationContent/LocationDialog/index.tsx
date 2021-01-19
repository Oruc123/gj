import { Box, Button, Dialog, DialogActions } from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { GTable2 } from "../../Gtable";
import TopButtons from "./TopButtons";
import GSearch from "../../GSearch";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullWidth: {
      maxWidth: 700,
    },
    root: {},
    cancel: {
      padding: "9px 16px",
      background: "#F5F6FA",
    },
    actionsWrapper: {
      justifyContent: "flex-start",
      marginTop: theme.spacing(1),
      border: "none",
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

const LocationDialog = ({
  handleClose,
  open,
}: {
  open: boolean;
  handleClose: () => void;
}) => {
  const styles = useStyles();
  const Backdrop = () => {
    const styles = useStyles();
    return <span onClick={handleClose} className={styles.backDrop}></span>;
  };
  return (
    <Dialog
      disableBackdropClick={false}
      BackdropComponent={Backdrop}
      onClose={handleClose}
      fullWidth={true}
      classes={{ paperFullWidth: styles.fullWidth, root: styles.root }}
      open={open}
    >
      <Box paddingY={3}>
        <TopButtons closeHandle={handleClose} />
        <Box
          borderRadius={3}
          marginBottom={2}
          marginX={2}
          border="1px solid #E5E8F0"
        >
          <GSearch />
        </Box>
        <Box style={{ overflowX: "auto" }}>
          <GTable2 />
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
          <Button
            onClick={handleClose}
            className={styles.cancel}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
export default LocationDialog;
