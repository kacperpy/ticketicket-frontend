import React from "react";
import "./styles/App.css";
import { ThemeProvider } from "@emotion/react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { createTheme } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
