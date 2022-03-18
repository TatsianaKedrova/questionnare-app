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
import { useDispatch } from "react-redux";
import {
  setDoesBelieveInHoroscope,
  setYourBirthDate,
} from "../../bll/questionsReducer";
import SecondQuestion from "./SecondQuestion";
import ThirdQuestion from "./ThirdQuestion";

const Questions = () => {
  const steps = [
    {
      label: "Question 1",
      description: `Do you believe in horoscope?`,
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
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [horoscope, setHoroscope] = useState<string>("");

  const formattedBirthDate = `${birthDate?.getDay()}/${birthDate?.getDate()}/${birthDate?.getFullYear()}`;
  console.log("formatted date: ", formattedBirthDate);

  const dispatch = useDispatch();

  const handleRadioChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setValue(event.target.value);
    setError(false);
  };

  const handleBirthDateChange = (newValue: Date | null) => {
    setBirthDate(newValue);
  };

  const handleSetHoroscope = () => {
    setHoroscope(horoscope);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (!value) {
        setError(true);
      } else {
        dispatch(setDoesBelieveInHoroscope({ isBelieveInHoroscope: value }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    } else if (activeStep === 1) {
      dispatch(setYourBirthDate({ birthDate: formattedBirthDate }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2) {
    //   dispatch(setYourHoroscope({ horoscope: horoscope }));
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      return;
    }
  };

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
              {index === 0 ? (
                <FirstQuestion
                  error={error}
                  handleRadioChange={handleRadioChange}
                  handleNext={handleNext}
                  radioValue={value}
                />
              ) : index === 1 ? (
                <SecondQuestion
                  birthDate={birthDate}
                  handleNext={handleNext}
                  handleBirthDateChange={handleBirthDateChange}
                />
              ) : (
                <ThirdQuestion />
              )}
              <Box sx={{ mb: 2 }}>
                <div>
                  {/* {index === steps.length - 1 ? "Finish" : "Continue"} */}
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
