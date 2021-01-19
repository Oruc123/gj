import {
  Box,
  Grid,
  Typography,
  Button,
  OutlinedInput,
  FormControl,
  FormGroup,
} from "@material-ui/core";
import React from "react";
import CInput from "../../Form/CInput";
import Wrapper from "../Wrapper";
import useStyles from "./Atom";

import mapImg from "../../../assets/img/map.jpg";
import { IChevronDown, IPlusSimple, ISearch } from "../../Icons";
const StepThree = ({ contorllers }: { contorllers: React.ReactNode }) => {
  const { itemTitle, itemStyle, addBox } = useStyles();
  return (
    <>
      <Typography variant="body2" className={itemTitle}>
        Address and contacts are the most important details of your company on
        the cards. Specify the most complete and accurate data.
      </Typography>
      <Wrapper>
        <CInput
          label={<Typography variant="body1">Company name</Typography>}
          placeholder="Company name"
        />
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={12} sm={6}>
            <CInput
              label={<Typography variant="body1">Phone</Typography>}
              placeholder="Phone number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CInput
              label={<Typography variant="body1">Web site</Typography>}
              placeholder="Web site"
            />
          </Grid>
        </Grid>

        <Box marginY={2}>
          <FormGroup>
            <label style={{ marginBottom: 8 }}>
              <Typography variant="body1">Address</Typography>
            </label>
            <FormControl fullWidth variant="outlined">
              <OutlinedInput
                style={{ height: 40, fontSize: 14, borderRadius: 3 }}
                placeholder="Address"
                endAdornment={<ISearch />}
              />
            </FormControl>
          </FormGroup>
        </Box>
        <Box marginX="-16px">
          <img
            src={mapImg}
            style={{ width: "100%", height: 300, objectFit: "cover" }}
          />
        </Box>
        <Box marginTop={2}>
          <Typography style={{ fontSize: 18, fontWeight: 700 }} variant="body1">
            Business categories
          </Typography>
          <Typography variant="body2">
            Categories describe what your business is, not what it does or sells
          </Typography>

          <Grid container alignItems="center" justify="space-between">
            <Grid item xs={12} sm={6}>
              <Box marginY={2}>
                <FormGroup>
                  <label style={{ marginBottom: 8 }}>
                    <Typography variant="body1">Main category</Typography>
                  </label>
                  <FormControl fullWidth variant="outlined">
                    <OutlinedInput
                      style={{ height: 40, fontSize: 14, borderRadius: 3 }}
                      placeholder="Main category"
                      endAdornment={<IChevronDown />}
                    />
                  </FormControl>
                </FormGroup>
              </Box>
            </Grid>
            <Grid item xs sm={6}>
              <Box className={addBox}>
                <Button startIcon={<IPlusSimple />} color="primary">
                  Add category
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box marginTop={1} style={{ paddingBottom: 0 }} className={itemStyle}>
          {contorllers}
        </Box>
      </Wrapper>
    </>
  );
};

export default StepThree;
