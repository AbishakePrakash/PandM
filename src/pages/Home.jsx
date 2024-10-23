import React, { useState, useEffect } from "react";
import {
  Autocomplete,
  Box,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import Dashboard from "../components/Dashboard";
import axios from "axios";

const Home = () => {
  const theme = useTheme();
  const [place, setPlace] = useState("");

  const handleFill = (query) => {
    axios
      .get(`http://192.168.29.180:3000/users`)
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  return (
    <Grid
      sx={{
        // backgroundColor: theme.background.primary,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Dashboard />
      {/* <Typography
        sx={{
          fontSize: 40,
          fontWeight: 1000,
          textAlign: "center",
          textShadow: "2px 2px #ffffff",
        }}
      >
        Welcome to PandM
      </Typography> */}
      <Grid sx={{ px: 5 }}>
        <Grid
          sx={{
            backgroundColor: "white",
            borderRadius: 5,
            height: "75vh",
          }}
        >
          <Box
            sx={{
              p: 10,
              mx: 10,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              sx={{ width: 400 }}
              name="origin"
              label="Origin"
              variant="filled"
              onChange={handleFill("")}
            />
            <TextField
              sx={{ width: 400 }}
              name="destination"
              label="Destination"
              variant="filled"
              onChange={handleFill("")}
            />
            <TextField
              sx={{ width: 400 }}
              name="vehicle"
              label="Vehicle"
              variant="filled"
              onChange={handleFill("")}
            />
            {/* <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            /> */}
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
