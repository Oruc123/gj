import {
  Box,
  Button,
  DialogActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import clsx from "clsx";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      border: `1px solid  ${theme.palette.border.main}`,
      opacity: 1,
    },
    backDrop: {
      position: "fixed",
      height: "100vh",
      width: "100%",
      background: "#fff",
      left: 0,
      top: 0,
      zIndex: 100,
      opacity: 0.9,
    },
    dialog: {
      position: "absolute",
      left: `calc(100% + ${theme.spacing(2)}px)`,
      top: 0,
      zIndex: 1000,
      minWidth: 420,
      opacity: 1,
      background: "#fff",
      [theme.breakpoints.down(1367)]: {
        left: 0,
        top: "100%",
        minWidth: "auto",
        width: "100%",
      },
    },
    dialogBottom: {
      bottom: 0,
      top: "auto",
      [theme.breakpoints.down(1367)]: {
        width: "100%",
        bottom: "100%!important",
      },
    },
    hugeWidth: {
      width: 608,
      [theme.breakpoints.down(1367)]: {
        left: 0,
        width: "100%",
      },
    },
    closeButton: {
      padding: 0,
    },
    cancel: {
      padding: "9px 16px",
      background: "#F5F6FA",
    },
    actionsWrapper: {
      marginTop: theme.spacing(1),
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    },
  })
);
interface EditDialog {
  closeHandle: () => void;
  children: React.ReactNode;
  title?: string;
  huge?: boolean;
  actions?: boolean;
  bottom?: boolean;
}
const EditDialog: React.FC<EditDialog> = ({
  closeHandle,
  children,
  title,
  huge,
  actions,
  bottom,
}) => {
  const st = useStyles();
  return (
    <>
      <Box onClick={closeHandle} className={st.backDrop}></Box>
      <Box
        className={clsx(
          st.dialog,
          huge ? st.hugeWidth : null,
          bottom ? st.dialogBottom : null
        )}
      >
        <Box className={st.main}>
          <Box
            display="flex"
            alignItems="center"
            paddingY={2}
            paddingX={3}
            justifyContent="space-between"
          >
            <Typography variant="h3">{title}</Typography>
            <IconButton onClick={closeHandle} className={st.closeButton}>
              <CloseRoundedIcon style={{ color: "#6C82AC" }} />
            </IconButton>
          </Box>
          {children}
          {!actions && (
            <DialogActions className={st.actionsWrapper}>
              <Button
                onClick={closeHandle}
                disableElevation
                color="primary"
                variant="contained"
              >
                Save
              </Button>
              <Button
                onClick={closeHandle}
                className={st.cancel}
                color="primary"
              >
                Cancel
              </Button>
            </DialogActions>
          )}
        </Box>
      </Box>
    </>
  );
};

export default EditDialog;
