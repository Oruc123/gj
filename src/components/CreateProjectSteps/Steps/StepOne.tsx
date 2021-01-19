import { Box, Typography } from "@material-ui/core";
import React from "react";
import CInput from "../../Form/CInput";
import Wrapper from "../Wrapper";
import useStyles from "./Atom";
const StepOne = ({ contorllers }: { contorllers: React.ReactNode }) => {
  const { itemTitle } = useStyles();

  return (
    <>
      <Typography variant="body2" className={itemTitle}>
        Create project
      </Typography>
      <Wrapper>
        <Box marginTop={1}>
          <Typography style={{ fontSize: 14 }} variant="body1">
            Enter project name
          </Typography>
        </Box>
        <CInput />
        {contorllers}
      </Wrapper>
    </>
  );
};

export default StepOne;
