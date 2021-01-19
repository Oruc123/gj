import React, { useCallback, useContext } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import { Container } from "@material-ui/core";
import getStepContent, { steps } from "./Steps";
import { useStyles } from "./Atom";
import { ctx } from "../../context";
export default function GStepper() {
  const { finishCreateProject } = useContext(ctx);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep == 2 && finishCreateProject) {
      finishCreateProject();
    }
  }, [activeStep]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, [activeStep]);

  return (
    <Container>
      <Stepper
        activeStep={activeStep}
        className={classes.resetContainer}
        orientation="vertical"
        nonLinear={true}
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              classes={{
                label: classes.label,
              }}
              StepIconProps={{
                classes: {
                  root: classes.stepIcon,
                  text: classes.iconText,
                },
              }}
            >
              {label}
            </StepLabel>
            <StepContent>
              {getStepContent(index, activeStep, handleNext, handleBack)}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Container>
  );
}
