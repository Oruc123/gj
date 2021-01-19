import { Box, Grid, Link, Typography, useTheme } from "@material-ui/core";
import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
const TableCard = () => {
  const { palette } = useTheme();
  return (
    <Box paddingY={2} paddingX={3}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Typography style={{ fontSize: 14 }} variant="subtitle1">
            Authorization
          </Typography>
          <Box display="flex" alignItems="flex-start" marginTop={2}>
            <Box marginRight={1}>
              <CheckCircleIcon style={{ color: palette.success.main }} />
            </Box>
            <div>
              <Typography variant="body2">Authorized</Typography>
              <Typography variant="subtitle1">
                Geoservice transferred management rights
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography style={{ fontSize: 14 }} variant="subtitle1">
            Data correction
          </Typography>
          <Box display="flex" alignItems="flex-start" marginTop={2}>
            <Box marginRight={1}>
              <ErrorIcon style={{ color: palette.error.main }} />
            </Box>
            <div>
              <Typography variant="body2">Invalid schedule</Typography>
              <Typography variant="subtitle1">
                There are no working days - Mon, Tue, Wed.
              </Typography>
              <Link>Correct data</Link>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography style={{ fontSize: 14 }} variant="subtitle1">
            Recommendations
          </Typography>
          <Box display="flex" alignItems="flex-start" marginTop={2}>
            <Box marginRight={1}>
              <InfoIcon style={{ color: palette.info.main }} />
            </Box>
            <div>
              <Typography variant="body2">Low rating</Typography>
              <Typography variant="subtitle1">
                Use the review section to explore the metrics
              </Typography>
              <Link>Go to the review section</Link>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography style={{ fontSize: 14 }} variant="subtitle1">
            Geoservice status
          </Typography>
          <Box display="flex" alignItems="flex-start" marginTop={2}>
            <Box marginRight={1}>
              <CheckCircleIcon style={{ color: palette.success.main }} />
            </Box>
            <div>
              <Typography variant="body2">Working</Typography>
              <Typography variant="subtitle1">
                Geoservice is currently working
              </Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography style={{ fontSize: 14 }} variant="subtitle1">
            Distance
          </Typography>
          <Box display="flex" alignItems="flex-start" marginTop={2}>
            <Box marginRight={1}>
              <WarningIcon style={{ color: palette.warning.main }} />
            </Box>
            <div>
              <Typography variant="body2">Distance</Typography>
              <Typography variant="subtitle1">
                Point is incorrectly located
              </Typography>
              <Link>Correct data</Link>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TableCard;
