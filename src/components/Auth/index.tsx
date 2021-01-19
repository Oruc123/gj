import React, { useState } from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import TabPanel from "../Tab/TabPanel";
import Login from "./Login";
// import Registration from "./Registration";
import { AntTab, StyledTabs } from "../Tab/Atom";
const header = ["Registration", "Login"];
const Auth = () => {
  const [tabvalue, setValue] = useState(1);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid alignItems="stretch" container>
      <Grid item md={8}></Grid>
      <Grid item md={4}>
        <Box minHeight="100vh" bgcolor="#fff" paddingY="70px" paddingX="31px">
          <Box maxWidth={400}>
            <Typography variant="h1">{header[tabvalue]}</Typography>
            <StyledTabs onChange={handleChange} value={tabvalue}>
              <AntTab tabIndex={0} label={header[0]} />
              <AntTab label={header[1]} tabIndex={1} />
            </StyledTabs>
            <Box paddingTop="24px">
              <TabPanel value={tabvalue} index={0}>
                <Login />
              </TabPanel>
              <TabPanel value={tabvalue} index={1}>
                <Login />
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Auth;
