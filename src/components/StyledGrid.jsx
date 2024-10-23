import { styled, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

const StyledGridComponent = (isVisible) => {
  const theme = useTheme();

  const StyledGrid = styled("div")(({ theme, isVisible }) => ({
    position: "absolute",
    top: isVisible ? 0 : "-100%", // Slide-in animation using isVisible
    left: 0,
    width: "100%",
    backgroundColor: theme.palette.background.paper, // Use MUI theme
    boxShadow: theme.shadows[2], // Use MUI shadow
    transition: theme.transitions.create("top", {
      easing: theme.transitions.easing.easeInOut,
      duration: 500, // Adjust transition duration
    }),
  }));

  return (
    <Grid>
      <Typography>HHHH</Typography>
    </Grid>
  );
};

export default StyledGridComponent;
