import { Box } from "@material-ui/core";
import React from "react";
import EditBlock from "../../EditBlock";
import img from "./assets/cafe.jpg";
import avatar from "./assets/star_logo.png";
import PhotoCameraOutlinedIcon from "@material-ui/icons/PhotoCameraOutlined";
import { useStyles } from "../Atom";
import EditDialog from "../../EditDialog";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import Uploader from "./Uploader";
const LocationImages = () => {
  const styles = useStyles();
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <EditBlock>
      {isOpenDialog && (
        <EditDialog huge title="Logo and photos" closeHandle={closeDialog}>
          <Uploader />
        </EditDialog>
      )}
      <Box
        zIndex={isOpenDialog ? 1200 : 1}
        onClick={openDialog}
        className={styles.imgWrapper}
      >
        <img className={styles.img} src={img} />
        <div className={styles.filter}></div>
        <div className={styles.imgCheap}>
          <PhotoCameraOutlinedIcon style={{ fontSize: 18, marginRight: 8 }} />
          <span>8 photos</span>
        </div>
        <div className={styles.logo}>
          <img src={avatar} />
        </div>
      </Box>
    </EditBlock>
  );
};
export default LocationImages;
