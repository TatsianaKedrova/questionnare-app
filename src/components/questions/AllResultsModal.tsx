import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtonCommon from "../../commonComponents/ButtonCommon";

type AllResultsModalPropsType = {
  open: boolean;
  handleClose: () => void;
  handleReset: () => void;
  thirdAnswer: string;
  secondAnswer: string | null;
  firstAnswer: string;
};

const AllResultsModal: React.FC<AllResultsModalPropsType> = ({
  thirdAnswer,
  secondAnswer,
  firstAnswer,
  open,
  handleClose,
  handleReset,
}) => {
  return (
    <Modal
      sx={{ backgrounColor: "transparent" }}
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          width: "600px",
          height: "400px",
          backgroundColor: "#CDA2F2",
          borderRadius: "10px",
          color: "white",
          m: "20% auto",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          m={"10px 10px"}
        >
          Answers:
        </Typography>
        <Typography id="modal-modal-description" sx={{ m: "20px" }} fontSize={20}>
          <Box>1. Do you believe in horoscope? Answer: {firstAnswer}</Box>
          <Box> 2. What is your birth date? Answer: {secondAnswer}</Box>
          <Box> 3. What is your zodiac sign? Answer: {thirdAnswer}</Box>
        </Typography>
        <Box sx={{textAlign: "center"}}>
        <ButtonCommon name="Start Again" handleNext={handleReset} />

        </Box>
      </Box>
    </Modal>
  );
};

export default AllResultsModal;
