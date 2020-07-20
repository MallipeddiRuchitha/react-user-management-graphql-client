import React, { Component } from "react";
import HomePage from "./pages/home-page/home-page";
import { ThemeProvider } from "@material-ui/core";
import { myTheme } from "../src/theme";
const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="container" data-testid="App">
       <HomePage></HomePage>
        {/* <h1>hiii</h1> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
