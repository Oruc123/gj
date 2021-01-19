import {
  Grid,
  Box,
  Typography,
  makeStyles,
  createStyles,
  Theme,
  Button,
} from "@material-ui/core";
import React from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import CPaper from "../../../../Elements/CPaper";
import GProgressSpinner from "../../../../Elements/GProgressSpinner";
import GpsNotFixedIcon from "@material-ui/icons/GpsNotFixed";
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    counthead: {
      fontSize: 38,
      fontWeight: 500,
      marginBottom: 8,
    },
    subHead: {},
  })
);

const Data = ({ column }: { column?: boolean }) => {
  const classes = useStyles();
  return (
    <>
      <Grid direction={column ? "column" : "row"} container spacing={2}>
        <Grid item md={column ? 12 : 6}>
          <CPaper>
            <Box>
              <Typography variant="h2">Location completness </Typography>
            </Box>
            <Box
              display="flex"
              marginTop={2}
              alignItems="center"
              marginBottom={1}
            >
              <GProgressSpinner value={25} />
              <Box marginLeft={3}>
                <Typography className={classes.counthead} variant="h2">
                  34%
                </Typography>
                <Typography
                  color="secondary"
                  className={classes.subHead}
                  variant="h3"
                >
                  Completness
                </Typography>
              </Box>
            </Box>

            <Box marginTop={3} marginBottom={-1}>
              <Button startIcon={<MapOutlinedIcon />} color="primary">
                Edit location
              </Button>
            </Box>
          </CPaper>
        </Grid>
        <Grid item md={column ? 12 : 6}>
          <CPaper>
            <Box>
              <Typography variant="h2">Location accuracy </Typography>
            </Box>
            <Box
              display="flex"
              marginTop={2}
              alignItems="center"
              marginBottom={1}
            >
              <GProgressSpinner value={55} />
              <Box marginLeft={3}>
                <Typography className={classes.counthead} variant="h2">
                  75%
                </Typography>
                <Typography
                  color="secondary"
                  className={classes.subHead}
                  variant="h3"
                >
                  Accuracy
                </Typography>
              </Box>
            </Box>

            <Box marginTop={3} marginBottom={-1}>
              <Button startIcon={<GpsNotFixedIcon />} color="primary">
                Check accuracy
              </Button>
            </Box>
          </CPaper>
        </Grid>
      </Grid>
    </>
  );
};
export default Data;
