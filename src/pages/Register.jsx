import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard";
import StyledGridComponent from "../components/StyledGrid";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Register = (dark, setDark) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const [isVisible, setIsVisible] = useState();

  // useEffect(() => {
  //   const isFirstVisit = !localStorage.getItem("hasVisitedHomepage");
  //   if (isFirstVisit) {
  //     setIsVisible(true);
  //     localStorage.setItem("hasVisitedHomepage", true); // Mark as visited
  //   }
  // }, []);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    // setMessage(null);
  };

  const handleSignUp = () => {
    const { email, password } = inputs;
    setIsLoading(true);
    setTimeout(() => {
      navigate("/");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Grid>
      {isLoading ? <LinearProgress /> : <div style={{ height: 4 }}></div>}
      {/* <LinearProgress /> */}
      <Grid
        sx={{
          backgroundColor: theme.background.primary,
          opacity: 0.9,
          borderRadius: 7,
          mx: 80,
          my: 20,
          px: 10,
          py: 6.2,
        }}
      >
        <Box>
          <Typography
            sx={{ textAlign: "center", mb: 5, fontSize: 25, fontWeight: 600 }}
          >
            Welcome to PandM!
          </Typography>
          <TextField
            variant="filled"
            required
            onChange={handleChange}
            fullWidth
            value={inputs.name}
            label="Name"
            name="name"
            sx={{ my: 2 }}
          />
          <TextField
            variant="filled"
            required
            onChange={handleChange}
            fullWidth
            value={inputs.email}
            label="Email"
            name="email"
            sx={{ my: 2 }}
          />
          <TextField
            variant="filled"
            required
            onChange={handleChange}
            fullWidth
            value={inputs.password}
            label="Password"
            name="password"
            sx={{ my: 2 }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              m: 5,
            }}
          >
            <Button variant="contained" onClick={handleSignUp}>
              Sign Up
            </Button>
            <Button variant="outlined" onClick={() => navigate("/")}>
              Sign In
            </Button>
          </Box>
        </Box>
        {/* <Login/> */}
      </Grid>
    </Grid>
  );
};

export default Register;
