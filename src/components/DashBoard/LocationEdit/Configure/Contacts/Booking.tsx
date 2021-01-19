import { Box, Link, List, ListItem, ListItemIcon } from "@material-ui/core";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import React from "react";
import EditBlock, { BlockTop } from "../../EditBlock";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import Form from "./BookingForm";
import EditDialog from "../../EditDialog";
import { useStyles } from "./index";

const Booking = () => {
  const styles = useStyles();
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <>
      <EditBlock>
        {isOpenDialog && (
          <EditDialog
            bottom
            huge
            title="Booking  urls"
            closeHandle={closeDialog}
          >
            <Form />
          </EditDialog>
        )}
        <Box position="relative" padding={2} zIndex={isOpenDialog ? 1000 : 1}>
          <BlockTop
            isOpen={isOpenDialog}
            label="Booking url"
            editHandler={openDialog}
          />
          <List disablePadding>
            <ListItem disableGutters className={styles.listText}>
              <ListItemIcon>
                <LanguageRoundedIcon className={styles.icon} />
              </ListItemIcon>
              <Link href="#">starbucks.com/checkout</Link>
            </ListItem>
          </List>
        </Box>
      </EditBlock>
    </>
  );
};

export default Booking;
