import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  Chip,
  makeStyles,
  Theme,
  createStyles,
  InputBase,
} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import React from "react";
import { useStyles } from "./ReviewContent";
import { ITag } from "../../../Icons";
export const useStylesD = makeStyles((theme: Theme) =>
  createStyles({
    replyContentTop: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > div:first-child": {
          order: 1,
        },
      },
    },
    tag: {
      marginRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      color: "#202A3D",
      fontSize: 13,
      fontWeight: 500,
      background: "#F0F6FF",
      "& .MuiChip-clickableColorPrimary": {
        background: "red",
      },
      "&:focus": {
        background: "#F0F6FF",
      },
    },
    disabled: {
      background: "transparent",
      fontWeight: 700,
      color: "#000!important",
      opacity: 1,
    },
    deleteIcon: {
      background: "transparent",
    },
    chipWrapper: {
      paddingLeft: theme.spacing(8),
      display: "flex",
      position: "relative",
      alignItems: "center",
      marginTop: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        paddingLeft: 0,
      },
    },

    drop: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      position: "absolute",
      background: "#fff",
      width: "calc(100% - 100px)",
      height: 136,
      padding: theme.spacing(2),
      borderRadius: 4,
      border: `1px solid ${theme.palette.border.main}`,
      overflowY: "auto",
      left: theme.spacing(8),
      zIndex: 5,
      top: "calc(100% + 20px)",
      "& > div": {
        marginBottom: 8,
      },
      [theme.breakpoints.down("sm")]: {
        left: 0,
        width: "100%",
      },
    },
    input: {
      fontSize: 13,
      marginLeft: 4,
    },
  })
);

const ReplyDialog = () => {
  const classes = useStyles();
  const classes2 = useStylesD();
  const [value, setValue] = React.useState("");
  return (
    <>
      <Box className={classes.replyContent}>
        <Box className={classes2.replyContentTop}>
          <Box textAlign="right">
            <IconButton style={{ padding: 0 }} disableRipple>
              <CloseRoundedIcon style={{ color: "#6C82AC", padding: 0 }} />
            </IconButton>
          </Box>
          <Box className={classes.replyContentAnswer}>
            <Typography style={{ fontSize: 15 }} variant="h4">
              Ответ
            </Typography>
          </Box>
        </Box>
        <TextField
          className={classes.textField}
          variant="outlined"
          rows={6}
          fullWidth
          multiline
        />

        <Box marginTop={3}>
          <Button
            style={{ marginRight: 16 }}
            color="primary"
            variant="contained"
          >
            Save
          </Button>
          <Button color="primary">Cancel</Button>
        </Box>
      </Box>

      <Box className={classes2.chipWrapper}>
        <Box component="span" marginRight={2} color="#6C82AC">
          <ITag />
        </Box>
        <Chip
          clickable={false}
          classes={{ root: classes2.tag, deleteIcon: classes2.deleteIcon }}
          onDelete={() => alert("Delete later")}
          label="Tag1"
          deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
        />
        <Chip
          deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
          classes={{ root: classes2.tag, deleteIcon: classes2.deleteIcon }}
          onDelete={() => alert("Delete later")}
          label="Tag1"
        />

        {/* <Chip
          classes={{
            root: classes2.disabled,
          }}
          label={
            <Typography className={classes2.disabled} variant="body2">
              Tag3
            </Typography>
          }
        /> */}

        <InputBase
          value={value}
          placeholder="Add Tag"
          className={classes2.input}
          onChange={(e: any) => setValue(e.target.value as string)}
        />

        {value.length > 0 && (
          <Box className={classes2.drop}>
            <Box>
              <Chip
                deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
                classes={{
                  root: classes2.tag,
                  deleteIcon: classes2.deleteIcon,
                }}
                label="Hermitage Square"
              />
            </Box>
            <Box>
              <Chip
                deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
                classes={{
                  root: classes2.tag,
                  deleteIcon: classes2.deleteIcon,
                }}
                label="Hermitage Square"
              />
            </Box>
            <Box>
              <Chip
                deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
                classes={{
                  root: classes2.tag,
                  deleteIcon: classes2.deleteIcon,
                }}
                label="Hermitage Square"
              />
            </Box>
            <Box>
              <Chip
                deleteIcon={<CloseRoundedIcon style={{ color: "#6C82AC" }} />}
                classes={{
                  root: classes2.tag,
                  deleteIcon: classes2.deleteIcon,
                }}
                label="Hermitage Square"
              />
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ReplyDialog;
