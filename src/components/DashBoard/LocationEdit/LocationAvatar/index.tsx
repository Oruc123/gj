import { Box, Typography } from "@material-ui/core";
import React from "react";
import EditBlock, { BlockTop } from "../EditBlock";
import { useStyles } from "./Atom";
import EditDialog from "../EditDialog";
import useDialogHook from "../../LocationContent/LocationDialog/dialog.hook";
import Form from "./Form";
const LocationAvatar = () => {
  const styles = useStyles();
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <EditBlock>
      {isOpenDialog && (
        <EditDialog title="About location" closeHandle={closeDialog}>
          <Form />
        </EditDialog>
      )}

      <Box padding={3} position="relative" zIndex={isOpenDialog ? 1100 : 1}>
        <BlockTop
          isOpen={isOpenDialog}
          avatar
          label={
            <Box>
              <Typography variant="h1">Baumana 51</Typography>
              <Box marginTop={1}>
                <Typography
                  style={{ fontSize: 13 }}
                  variant="body2"
                  component="span"
                >
                  16267
                </Typography>
              </Box>
            </Box>
          }
          editHandler={openDialog}
        />
        <Box
          display="flex"
          marginTop={2}
          justifyContent="space-between"
          alignItems=" flex-start"
        >
          <Box>
            <Typography
              style={{ fontSize: 13 }}
              variant="body2"
              component="span"
            >
              Restoraunt, coffee
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography
              style={{ fontSize: 13 }}
              variant="body2"
              component="span"
            >
              Since 3 may 2020
            </Typography>
          </Box>
        </Box>
      </Box>
    </EditBlock>
  );
};
export default LocationAvatar;
