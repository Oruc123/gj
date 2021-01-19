import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import EditBlock, { BlockTop } from "../../EditBlock";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import map from "./map.png";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import EditDialog from "../../EditDialog";
import Form from "./Form";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      display: "block",
      width: "100%",
      objectFit: "cover",
      height: 108,
    },
  })
);

const Location = () => {
  const styles = useStyles();
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <EditBlock>
      {isOpenDialog && (
        <EditDialog huge title="Location" closeHandle={closeDialog}>
          <Form />
        </EditDialog>
      )}
      <Box position="relative" zIndex={isOpenDialog ? 1000 : 1}>
        <Box padding={2}>
          <BlockTop
            isOpen={isOpenDialog}
            startIcon={<LocationOnOutlinedIcon style={{ color: "#6C82AC" }} />}
            editHandler={openDialog}
            avatar
            label={
              <Box style={{ transform: "translateY(3px)" }} marginTop={1.3}>
                <Typography color="primary" variant="h4">
                  Baumana street 51, Kazan, TA 420111
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    component="div"
                    style={{ color: "#A0A6B1" }}
                  >
                    GUM
                  </Typography>
                </div>
              </Box>
            }
          ></BlockTop>
        </Box>
        <div>
          <img className={styles.img} src={map} />
        </div>
      </Box>
    </EditBlock>
  );
};

export default Location;
