import React from "react";
import { Box, IconButton, Typography } from "@material-ui/core";
import CInput from "../../Inputs";
import ControlPointOutlinedIcon from "@material-ui/icons/ControlPointOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";

const Form = () => {
  return (
    <>
      <Box marginTop="-15px" paddingX={3}>
        <Typography variant="body2" style={{ color: "#7B7B7B" }}>
          URLs for goal link
        </Typography>
      </Box>
      <Box paddingY={2} paddingX={3}>
        <Box display="flex" alignItems="center">
          <Box marginTop="-8px" flexGrow={1} marginRight={2}>
            <CInput value="starbucks.com/checkout" type="text" />
          </Box>
          <IconButton style={{ padding: 0 }}>
            <ControlPointOutlinedIcon
              style={{ fontSize: 22 }}
              color="primary"
            />
          </IconButton>
        </Box>
        <Box marginY={1} />

        <Box display="flex" alignItems="center">
          <Box marginTop="-8px" flexGrow={1} marginRight={2}>
            <CInput placeholder="https://" type="text" />
          </Box>
          <IconButton style={{ padding: 0 }}>
            <RemoveCircleOutlineOutlinedIcon
              color="primary"
              style={{ fontSize: 22 }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
export default Form;
