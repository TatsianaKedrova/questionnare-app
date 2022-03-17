import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FirstQuestion from "./FirstQuestion";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../../bll/store";
import { setDoesBelieveInHoroscope } from "../../bll/questionsReducer";

const Questions = () => {
  const steps = [
    {
      label: "Question 1",
      description: `Do you like horoscope?`,
    },
    {
      label: "Question 2",
      description: "What is your birth date?",
    },
    {
      label: "Question 3",
      description: `Choose your horoscope from the list.`,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [error, setError] = useState(false);
  const [value, setValue] = useState<string>("");

  //redux state
  const believeValue = useSelector<RootStateType, string>(
    (state) => state.questReducer.isBelieveInHoroscope
  );
  const dispatch = useDispatch();

  const handleRadioChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (!value) {
        setError(true);
        console.log("there is error cos option is not chosen");
      } else {
        dispatch(setDoesBelieveInHoroscope({ isBelieveInHoroscope: value }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 1) {
    } else if (activeStep === 2) {
    } else {
      return;
    }
  };

  console.log("believeValue: ", believeValue);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{ maxWidth: "inherit", height: "inherit", ml: "15px", mt: "15px" }}
    >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              {index === 0 && (
                <FirstQuestion
                  error={error}
                  handleRadioChange={handleRadioChange}
                  handleNext={handleNext}
                  radioValue={value}
                />
              )}
              <Box sx={{ mb: 2 }}>
                <div>
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button> */}
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default Questions;
