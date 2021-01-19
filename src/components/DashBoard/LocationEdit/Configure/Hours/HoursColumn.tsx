import React from "react";
import { Box, IconButton, OutlinedInput, Typography } from "@material-ui/core";
import CInput from "../../Inputs";
import RemoveIcon from "@material-ui/icons/Remove";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";

const HourColums = ({ label }: { label: string }) => {
  return (
    <Box
      marginBottom={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginRight={5}
        flex={1}
      >
        <Typography style={{ marginRight: 10, minWidth: 90 }} variant="body2">
          {label}
        </Typography>
        <Typography variant="h4" color="primary" component="span">
          open
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" marginLeft="auto">
        <Box width="68px">
          <OutlinedInput
            style={{ padding: "12px 16px", width: 68, height: 40 }}
          />
        </Box>
        <RemoveIcon style={{ color: "#747474", margin: "0 8px" }} />
        <Box marginRight={2}>
          <OutlinedInput
            style={{ padding: "12px 16px", width: 68, height: 40 }}
          />
        </Box>
        <IconButton style={{ padding: 0 }} color="primary">
          <ControlPointOutlinedIcon style={{ fontSize: 22 }} />
        </IconButton>
      </Box>
    </Box>
  );
};
export default HourColums;
