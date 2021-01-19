import { Box, Typography } from "@material-ui/core";
import React from "react";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import EditBlock from "../../EditBlock";
import { useStyles } from "./Atom";
import clsx from "clsx";

const Uploader = () => {
  const styles = useStyles();
  return (
    <Box paddingY={2} paddingX={3}>
      <EditBlock>
        <Box className={styles.uploadWrpper}>
          <Box className={styles.logoUploader}>
            <input className={styles.inputFile} type="file" />
            <Box>
              <CloudUploadOutlinedIcon color="primary" />
            </Box>
            <Typography color="primary" variant="h4">
              Upload logo
            </Typography>
          </Box>
          <Box className={styles.coverUploader}>
            <input className={styles.inputFile} type="file" />
            <Box display="flex" alignItems="center">
              <CloudUploadOutlinedIcon
                style={{ marginRight: 8 }}
                color="primary"
              />
              <Typography color="primary" variant="h4">
                Upload logo
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box component="span" display="block" marginTop={3}>
          <Box marginBottom={1}>
            <Typography variant="body2">Additional photos</Typography>
          </Box>
          <Box className={clsx(styles.logoUploader, styles.hugeLogoUploader)}>
            <input className={styles.inputFile} type="file" />
            <Box>
              <AddCircleOutlineOutlinedIcon style={{ color: "#6C82AC" }} />
            </Box>
            <Typography color="primary" variant="h4">
              Add
            </Typography>
          </Box>
        </Box>
      </EditBlock>
    </Box>
  );
};

export default Uploader;
