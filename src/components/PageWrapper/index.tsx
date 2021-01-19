import { Box, Grid } from "@material-ui/core";
import React from "react";
import Header from "../CreateProjectSteps/Header";
type Pageprops = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<Pageprops> = ({ children }) => {
  return (
    <Grid direction="column" style={{ minHeight: "100vh" }} container>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>{children}</Grid>
      <Grid style={{ marginTop: "auto" }} item>
        <Box
          component="footer"
          bgcolor="#fff"
          height="61px"
          width="100%"
          paddingX="104px"
          display="flex"
          alignItems="center"
          color="#5C6784"
        >
          © GeoJet 2020. All rights reserved
        </Box>
      </Grid>
    </Grid>
  );
};

export default PageWrapper;
