import { Box, Button } from "@material-ui/core";
import React from "react";
import EditBlock, { BlockTop } from "../../EditBlock";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import EditDialog from "../../EditDialog";

const AdditionalHours = () => {
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <EditBlock>
      {isOpenDialog && (
        <EditDialog
          bottom
          actions
          title="Additional hours"
          closeHandle={closeDialog}
        >
          <Box margin={2}>
            <Button color="primary" variant="contained">
              Add date
            </Button>
          </Box>
        </EditDialog>
      )}
      <Box position="relative" zIndex={isOpenDialog ? 1000 : 1} padding={2}>
        <BlockTop
          isOpen={isOpenDialog}
          startIcon={<QueryBuilderOutlinedIcon style={{ color: "#000" }} />}
          label="Additional Hours"
          editHandler={openDialog}
        />
      </Box>
    </EditBlock>
  );
};

export default AdditionalHours;
