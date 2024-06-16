import React, { useState } from "react";
import Checkbox from "@mui/joy/Checkbox";
import DropDownComponent from "./DropDownComponent";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  alpha,
  TextField,
  Box,
  styled,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
const lightPinkColor = alpha("#F8F8FF", 0.7);

const StyledBox = styled(Box)({
  marginRight: "24px",
});

const CheckBoxStyle = styled(Box)({
  marginLeft: "24px",
  marginTop: "10px",
});
export default function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");
  const [chosenOption, setChosenOption] = useState("");
  const [emailError, setEmailError] = useState("");

  const [checkedServices, setCheckedServices] = useState([]);

  const handleCheckboxChange = (event) => {
    const service = event.target.value;
    setCheckedServices((prevCheckedServices) =>
      event.target.checked
        ? [...prevCheckedServices, service]
        : prevCheckedServices.filter((s) => s !== service)
    );
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setAge("");
    setComment("");
    setChosenOption("");
    setCheckedServices([]);
    setEmailError("");
  };

  function formDataHandler() {
    const formData = {
      name: name,
      email: email,
      age: age,
      comment: comment,
      selectedVal: chosenOption,
      selectedServices: checkedServices,
    };
    console.log(formData);
    resetForm();
  }
  const validateEmail = () => {
    if (!email) {
      setEmailError("Please enter a valid email");
    } else {
      formDataHandler();
    }
  };

  return (
    <>
      <Card
        sx={{ width: "50%", bgcolor: lightPinkColor, mx: "auto", mt: "50px" }}
        elevation={5}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}
            gutterBottom
          >
            Feedback Survey Form
          </Typography>
          <StyledBox>
            <TextField
              label="Name"
              variant="outlined"
              sx={{
                width: "100%",
                padding: "8px",
              }}
              onChange={(event) => setName(event.target.value)}
              required
              value={name}
            />
          </StyledBox>
          <StyledBox>
            <TextField
              label="Email"
              variant="outlined"
              sx={{
                width: "100%",
                padding: "8px",
              }}
              onChange={(event) => setEmail(event.target.value)}
              required
              error={!!emailError}
              helperText={emailError}
              value={email}
              type="email"
            />
          </StyledBox>

          <StyledBox>
            <TextField
              label="Age"
              variant="outlined"
              sx={{
                width: "100%",
                padding: "8px",
              }}
              onChange={(event) => setAge(event.target.value)}
              required
              value={age}
              type="number"
            />
          </StyledBox>
        </CardContent>
        <Typography variant="h6" sx={{ marginLeft: "24px" }}>
          Type of feedback
        </Typography>
        <DropDownComponent
          setChosenFeedOption={setChosenOption}
          chosenOption={chosenOption}
        />
        <Typography variant="h6" sx={{ marginLeft: "24px", marginTop: "10px" }}>
          Services Used
        </Typography>
        <CheckBoxStyle>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="Service 1"
                  checked={checkedServices.includes("Service 1")}
                  onChange={handleCheckboxChange}
                />
              }
              label="Service 1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Service 2"
                  checked={checkedServices.includes("Service 2")}
                  onChange={handleCheckboxChange}
                />
              }
              label="Service 2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="Service 3"
                  checked={checkedServices.includes("Service 3")}
                  onChange={handleCheckboxChange}
                />
              }
              label="Service 3"
            />
          </FormGroup>

          <p>Selected services: {checkedServices.join(", ")}</p>
        </CheckBoxStyle>
        <Typography
          variant="h6"
          sx={{ marginLeft: "24px", marginTop: "10px", marginBottom: "10px" }}
        >
          Additional Comments:
        </Typography>
        <StyledBox sx={{ marginLeft: "24px" }}>
          <TextField
            id="outlined-multiline-static"
            label="Type something.."
            multiline
            rows={4}
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(event) => setComment(event.target.value)}
            required
            value={comment}
          />
        </StyledBox>
        <CardActions sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              marginRight: "24px",
              marginLeft: "24px",
              textTransform: "none",
            }}
            onClick={formDataHandler}
            // onClick={validateEmail}
          >
            Submit Feedback
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
