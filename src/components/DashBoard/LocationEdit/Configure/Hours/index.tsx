import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import EditBlock, { BlockTop } from "../../EditBlock";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import useDialogHook from "../../../LocationContent/LocationDialog/dialog.hook";
import Form from "./Form";
import EditDialog from "../../EditDialog";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem: {
      margin: 0,
      paddingTop: 5,
      paddingBottom: 5,
      justifyContent: "flex-start",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      "& .MuiListItemText-root": {
        flex: 0,
        flexBasis: 100,
        margin: 0,
      },
    },
  })
);
const data = [
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
  {
    day: "Sunday",
    hours: "9:00 AM to 8:00",
  },
];
const Hours = () => {
  const { isOpenDialog, openDialog, closeDialog } = useDialogHook();
  const styles = useStyles();
  return (
    <EditBlock>
      {isOpenDialog && (
        <EditDialog title="Hours" closeHandle={closeDialog}>
          <Form />
        </EditDialog>
      )}
      <Box
        position="relative"
        zIndex={isOpenDialog ? 1000 : 1}
        paddingY={1}
        paddingX={2}
      >
        <BlockTop
          isOpen={isOpenDialog}
          label="Hours"
          startIcon={<QueryBuilderOutlinedIcon style={{ color: "#000" }} />}
          editHandler={openDialog}
        />
        <List disablePadding>
          {data.map((el, ind) => (
            <ListItem key={ind} className={styles.listItem}>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    style={{ fontSize: 14, fontWeight: 400 }}
                    variant="body2"
                  >
                    Sunday
                  </Typography>
                }
              />
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    style={{ fontSize: 14, fontWeight: 400 }}
                    variant="body2"
                  >
                    9:00 AM to 8:00
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </EditBlock>
  );
};

export default Hours;
