import { useState } from "react";
// import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { darkTheme, lightTheme } from "./utils/theme";
import Login from "./components/Login";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className="App">
      <ThemeProvider theme={dark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login dark={dark} setDark={setDark} />} />
          <Route
            path="/home"
            element={<Home dark={dark} setDark={setDark} />}
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
