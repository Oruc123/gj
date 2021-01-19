import React from "react";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import Controllers from "../Controllers";
export const steps = ["Create project", "Company data", "Address and contacts"];

const getStepContent = (
  step: number,
  activeStep: number,
  handleNext: () => void,
  handleBack: () => void
) => {
  switch (step) {
    case 0:
      return (
        <StepOne
          contorllers={
            <Controllers
              handleBack={handleBack}
              handleNext={handleNext}
              stepsLength={steps.length}
              activeStep={activeStep}
            />
          }
        />
      );
    case 1:
      return (
        <StepTwo
          contorllers={
            <Controllers
              handleBack={handleBack}
              handleNext={handleNext}
              stepsLength={steps.length}
              activeStep={activeStep}
            />
          }
        />
      );
    case 2:
      return (
        <StepThree
          contorllers={
            <Controllers
              handleBack={handleBack}
              handleNext={handleNext}
              stepsLength={steps.length}
              activeStep={activeStep}
            />
          }
        />
      );
    default:
      return "Unknown step";
  }
};
export default getStepContent;
