import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import React from "react";
import EditBlock, { BlockTop } from "../../EditBlock";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import EditDialog from "../../EditDialog";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      fontSize: 14,
      fontWeight: 400,
      borderColor: "red",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.border.main,
      },
    },
  })
);
const AdditionalHours = () => {
  const styles = useStyles();
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <Box marginTop={2}>
      <EditBlock>
        {isOpenDialog && (
          <EditDialog bottom huge title="Description" closeHandle={closeDialog}>
            <Box paddingY={2} paddingX={3}>
              <TextField
                className={styles.textField}
                variant="outlined"
                rows={12}
                fullWidth
                multiline
                defaultValue="While we make reasonable efforts to provide accurate and timely information about Starbucks 
Corporation on the Sites, you should not assume that the information is always up to date 
or that the Sites contain all the relevant information available about Starbucks. "
              />
            </Box>
          </EditDialog>
        )}

        <Box padding={2} position="relative" zIndex={isOpenDialog ? 1000 : 1}>
          <BlockTop
            isOpen={isOpenDialog}
            label="Description"
            startIcon={<DescriptionOutlinedIcon style={{ color: "#7E92B7" }} />}
            editHandler={openDialog}
          />
          <Box marginTop={2}>
            <Typography component="p" style={{ fontWeight: 400, fontSize: 16 }}>
              While we make reasonable efforts to provide accurate and timely
              information about Starbucks Corporation on the Sites, you should
              not assume that the information is always up to date or that the
              Sites contain all the relevant information available about
              Starbucks.
            </Typography>
          </Box>
        </Box>
      </EditBlock>
    </Box>
  );
};

export default AdditionalHours;
