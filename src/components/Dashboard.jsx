import { Button, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import logo from "../../public/pandm.png";

const menuItems = [
  { id: 1, menu: "HOME" },
  { id: 2, menu: "SERVICES" },
  { id: 3, menu: "PRICE" },
  { id: 4, menu: "ABOUT US" },
];

const Dashboard = () => {
  return (
    <Grid sx={{ p: 5 }}>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "aliceblue",
          height: 100,
          border: "1px solid black",
          borderRadius: 5,
          // m: 3,
        }}
      >
        <Grid sx={{ width: 240 }}>
          <img
            src={logo}
            alt="img"
            width={60}
            style={{ borderRadius: 10, margin: 20 }}
          />
        </Grid>
        <Grid
          sx={{
            px: "20vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {menuItems &&
            menuItems.map((item) => (
              <Grid sx={{ margin: 3 }} key={item.id}>
                {item.menu}
              </Grid>
            ))}
        </Grid>
        <Grid sx={{ width: 240 }}>
          <Button sx={{ margin: 1 }} color="success" variant="contained">
            SIGN IN
          </Button>
          <Button sx={{ margin: 1 }} color="primary" variant="contained">
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
