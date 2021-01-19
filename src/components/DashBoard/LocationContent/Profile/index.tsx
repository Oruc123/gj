import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import imgSrc from "./Map.jpg";
import CPaper from "../../../Elements/CPaper";
import Table from "./Table";

const Profile = () => {
  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(breakPoint);
  const imgHeight = breakPoint ? 265 : 159;
  return (
    <CPaper height noPadding>
      <Box height="100%" display="flex" flexDirection="column">
        <img
          src={imgSrc}
          style={{ width: "100%", height: imgHeight, display: "block" }}
        />
        <Box paddingTop={2}>
          <Box paddingX={3} marginBottom={2}>
            <Typography variant="h2">Location competitors</Typography>
          </Box>
          <Table />
        </Box>
        <Box paddingX={3} marginBottom={1.5} marginTop="auto">
          <Button startIcon={<AddIcon />} color="primary">
            Add competitor
          </Button>
        </Box>
      </Box>
    </CPaper>
  );
};

export default Profile;
