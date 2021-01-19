import React from "react";
import { Box, Button, Grid, IconButton, Typography } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CInput from "../../Inputs";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectButon: {
      border: `1px solid ${theme.palette.border.main}`,
      borderRadius: 3,
      padding: `${theme.spacing(1)}px ${theme.spacing(2)}px `,
      "&:hover": {
        background: "#F5F7FF",
      },
    },
  })
);
const Form = () => {
  const styles = useStyles();
  return (
    <Box
      paddingY={2}
      paddingX={3}
      //   marginBottom={1}
      //   display="flex"
      //   alignItems="center"
    >
      <Grid container spacing={2}>
        <Grid item>
          <Button
            classes={{
              root: styles.selectButon,
            }}
            disableElevation
            disableFocusRipple
            disableRipple
            endIcon={<KeyboardArrowDownIcon style={{ color: "#6C82AC" }} />}
          >
            Phone number
          </Button>
        </Grid>
        <Grid item xs>
          <Box marginTop="-8px">
            <CInput type="text" />
          </Box>
        </Grid>
        <Grid item xs>
          <Box display="flex" alignItems="center">
            <Box marginRight={2}>
              <Typography variant="body2">ext.:</Typography>
            </Box>
            <Box marginTop="-8px" marginRight={2}>
              <CInput type="text" />
            </Box>
            <IconButton style={{ padding: 0 }}>
              <ControlPointOutlinedIcon
                style={{ fontSize: 22, color: "#6C82AC" }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Box marginY={1} />
      <Grid container spacing={2}>
        <Grid item>
          <Button
            classes={{
              root: styles.selectButon,
            }}
            disableElevation
            disableFocusRipple
            disableRipple
            endIcon={<KeyboardArrowDownIcon style={{ color: "#6C82AC" }} />}
          >
            Phone number
          </Button>
        </Grid>

        <Grid item xs>
          <Box display="flex" alignItems="center">
            <Box marginTop="-8px" flexGrow={1} marginRight={2}>
              <CInput type="text" />
            </Box>
            <IconButton style={{ padding: 0 }}>
              <RemoveCircleOutlineOutlinedIcon
                style={{ fontSize: 22, color: "#6C82AC" }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Form;
