import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ClearButton } from "./Buttons";

const BlockNav = ({
  title,
  witThoutButton,
}: {
  title: string;
  witThoutButton?: boolean;
}) => {
  return (
    <Box marginBottom={2} alignItems="center" display="flex">
      <Typography style={{ fontSize: 15 }} variant="h3">
        {title}
      </Typography>
      {!witThoutButton && <ClearButton />}
    </Box>
  );
};
export default BlockNav;
