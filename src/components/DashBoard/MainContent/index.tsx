import { Box, Button, Hidden, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { AntTabD, StyledTabsD } from "../../Tab/Atom";
import GSearch from "../GSearch";
import GTable from "../Gtable";
import Statics from "./Statics";
import { GPaper, useStyles } from "./Atom";
import TabPanel from "../../Tab/TabPanel";
import map from "../../../assets/img/bigMap.png";
import { Add } from "@material-ui/icons";
const MainContent = () => {
  const classes = useStyles();
  const [tabvalue, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Statics />
      <Box className={classes.locationHeadBox}>
        <Typography variant="h2">Locations</Typography>
        <Box position="relative">
          <StyledTabsD onChange={handleChange} value={tabvalue}>
            <AntTabD label="Locations" tabIndex={0} />
            <AntTabD label="Map" tabIndex={1} />
          </StyledTabsD>
        </Box>
      </Box>
      <GPaper style={{ padding: 0, marginBottom: 80 }}>
        <Box display="flex" padding={1} alignItems="center">
          <GSearch />
          <Hidden smDown>
            <Button startIcon={<Add />} color="primary">
              Add Location
            </Button>
          </Hidden>
        </Box>
        <TabPanel value={tabvalue} index={0}>
          <GTable />
        </TabPanel>
        <TabPanel value={tabvalue} index={1}>
          <Box>
            <img
              src={map}
              style={{ width: "100%", display: "block", maxHeight: 538 }}
            />
          </Box>
        </TabPanel>
      </GPaper>
    </>
  );
};

export default MainContent;
