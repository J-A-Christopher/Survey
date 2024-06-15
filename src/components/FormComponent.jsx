import React from "react";
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
            />
          </StyledBox>
        </CardContent>
        <Typography variant="h6" sx={{ marginLeft: "24px" }}>
          Type of feedback
        </Typography>
        <DropDownComponent/>
        <Typography variant="h6" sx={{ marginLeft: "24px", marginTop: "10px" }}>
          Services Used
        </Typography>
        <CheckBoxStyle>
          <Checkbox label="Service 1" />
        </CheckBoxStyle>
        <CheckBoxStyle>
          <Checkbox label="Service 2" />
        </CheckBoxStyle>
        <CheckBoxStyle>
          <Checkbox label="Service 3" />
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
          >
            Submit Feedback
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
