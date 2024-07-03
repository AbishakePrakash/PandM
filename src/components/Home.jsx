import React, { useState, useEffect } from "react";
import { Grid, useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  return (
    <Grid>
      <Grid>Banner</Grid>
      <Grid>Image</Grid>
    </Grid>
  );
};

export default Home;
