import { useTheme } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";

const Login = (dark, setDark) => {
  const theme = useTheme();

  return (
    <Grid
      sx={{
        backgroundColor: theme.background.primary,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Dashboard />
    </Grid>
  );
};

export default Login;
