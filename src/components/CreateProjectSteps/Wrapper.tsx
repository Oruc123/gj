import { Box, Paper } from "@material-ui/core";
import React from "react";

type Pageprops = {
  children: React.ReactNode;
};

const Wrapper: React.FC<Pageprops> = ({ children }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Paper elevation={0}>
      <Box padding={2} paddingBottom={2} paddingTop={1}>
        {children}
      </Box>
    </Paper>
  );
};

export default Wrapper;
