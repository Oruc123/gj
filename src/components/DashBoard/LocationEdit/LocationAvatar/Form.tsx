import { Box, Grid, IconButton } from "@material-ui/core";
import React from "react";
import CInput from "../Inputs";
import CalendarTodayOutlinedIcon from "@material-ui/icons/CalendarTodayOutlined";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
const Form = () => {
  return (
    <Box paddingY={2} paddingX={3}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CInput label="Location name" />
        </Grid>
        <Grid item xs={6}>
          <CInput label="Branch code" />
        </Grid>
        <Grid item xs={6}>
          <CInput
            icon={
              <CalendarTodayOutlinedIcon
                style={{ color: "#6C82AC", fontSize: 18 }}
              />
            }
            label="Opening date"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs>
            <Box display="flex" alignItems="flex-end">
              <Box flex={1}>
                <CInput label="Location name" />
              </Box>
              <Box>
                <IconButton>
                  <ControlPointOutlinedIcon
                    style={{ color: "#6C82AC", fontSize: 22 }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-end">
            <Box flex={1}>
              <CInput />
            </Box>
            <Box>
              <IconButton>
                <RemoveCircleOutlineOutlinedIcon
                  style={{ color: "#6C82AC", fontSize: 22 }}
                />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
