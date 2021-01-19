import { Box, Typography } from "@material-ui/core";
import React from "react";
import PresenceTable from "./Table";
const TableBlock = () => {
  return (
    <Box marginTop={2}>
      <Typography style={{ fontSize: 26 }} variant="body1">
        Presence list
      </Typography>
      <PresenceTable />
    </Box>
  );
};

export default TableBlock;
