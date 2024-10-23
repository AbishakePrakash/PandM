import { useState } from "react";
// import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/theme";
import Landing from "./pages/Landing";
import Dashboard from "./components/Dashboard";
import Register from "./pages/Register";
import AuthProvider from "react-auth-kit";
import store from "./auth/authKit";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className="App">
      <AuthProvider store={store}>
        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={<Landing dark={dark} setDark={setDark} />}
            />
            <Route
              path="/register"
              element={<Register dark={dark} setDark={setDark} />}
            />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
