import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import CInput from "../../Inputs";
import map from "./f_map.png";
const Form = () => {
  return (
    <>
      <Box paddingY={2} paddingX={3}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <CInput label="Country" />
          </Grid>
          <Grid item xs={4}>
            <CInput label="City" />
          </Grid>
          <Grid item xs={4}>
            <CInput label="ZIP code" />
          </Grid>
          <Grid item xs={4}>
            <CInput label="District" />
          </Grid>
          <Grid item xs={8}>
            <CInput
              label={
                <Box display="flex" justifyContent="space-between">
                  <Typography style={{ fontSize: 14 }} variant="body2">
                    Address
                  </Typography>
                  <Typography
                    color="primary"
                    style={{ fontSize: 14 }}
                    variant="body2"
                  >
                    Comments on the address
                  </Typography>
                </Box>
              }
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <img style={{ width: "100%" }} src={map} />
      </Box>
      <Box paddingY={2} paddingX={3}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                style={{ fontSize: 14, marginTop: 8, marginRight: 8 }}
                variant="body2"
              >
                Latitude
              </Typography>
              <CInput value="53.5869502" />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                style={{ fontSize: 14, marginTop: 8, marginRight: 8 }}
                variant="body2"
              >
                Longitude
              </Typography>
              <CInput value="53.5869502" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Form;
