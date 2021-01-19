import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Link,
} from "@material-ui/core";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";
import AlternateEmailRoundedIcon from "@material-ui/icons/AlternateEmailRounded";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import React from "react";
import EditBlock, { BlockTop } from "../../EditBlock";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import Form from "./Form";
import EditDialog from "../../EditDialog";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listText: {
      margin: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      marginBottom: 16,
      "& .MuiListItemIcon-root": {
        minWidth: 42,
      },
    },
    icon: {
      color: theme.palette.violet.main,
    },
  })
);

const Contacts = () => {
  const styles = useStyles();
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  return (
    <>
      <EditBlock>
        {isOpenDialog && (
          <EditDialog huge title="Contacts" closeHandle={closeDialog}>
            <Form />
          </EditDialog>
        )}
        <Box position="relative" zIndex={isOpenDialog ? 1000 : 1} padding={2}>
          <BlockTop
            isOpen={isOpenDialog}
            label="Contacts"
            editHandler={openDialog}
          />
          <List disablePadding>
            <ListItem disableGutters className={styles.listText}>
              <ListItemIcon>
                <CallOutlinedIcon className={styles.icon} />
              </ListItemIcon>
              <Link style={{ color: "#000" }} href="#">
                +7 (495) 229-26-91{" "}
                <Typography
                  style={{
                    marginLeft: 16,
                    color: "grey",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                  component="span"
                >
                  ext.{"  "}3237
                </Typography>
              </Link>
            </ListItem>
            <ListItem disableGutters className={styles.listText}>
              <ListItemIcon>
                <LanguageRoundedIcon className={styles.icon} />
              </ListItemIcon>
              <Link href="#" color="primary">
                starbucks.com
              </Link>
            </ListItem>
            <ListItem disableGutters className={styles.listText}>
              <ListItemIcon>
                <AlternateEmailRoundedIcon className={styles.icon} />
              </ListItemIcon>
              <Link href="#" color="primary">
                mailto@starbucks.com
              </Link>
            </ListItem>
            <ListItem disableGutters className={styles.listText}>
              <ListItemIcon>
                <InstagramIcon className={styles.icon} />
              </ListItemIcon>
              <Link href="#" color="primary">
                instagramm.com/starbucks
              </Link>
            </ListItem>
            <ListItem disableGutters className={styles.listText}>
              <ListItemIcon>
                <TwitterIcon className={styles.icon} />
              </ListItemIcon>
              <Link href="#" color="primary">
                twitter.com/starbucks
              </Link>
            </ListItem>
          </List>
        </Box>
      </EditBlock>
    </>
  );
};

export default Contacts;
