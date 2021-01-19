import React from "react";
import { Grid, Button, Box } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useStyles } from "./Atom";

interface IControllers {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  stepsLength: number;
  additionalText?: React.ReactNode;
}

const Controllers: React.FC<IControllers> = ({
  activeStep,
  handleNext,
  handleBack,
  stepsLength,
  additionalText,
}) => {
  const classes = useStyles();
  return (
    <Grid justify="space-between" container direction="row" alignItems="center">
      <Grid item sm={6}>
        {additionalText}
        <Box textAlign="left">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            color="primary"
          >
            Back
          </Button>
        </Box>
      </Grid>
      <Grid item sm={6}>
        <Box textAlign="right">
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === stepsLength - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Controllers;
