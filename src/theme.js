import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#6b5c3a", // We can directly give colors in # without importing.
    },
    secondary: {
      main: "#ffffff",
    },
    myColor: {
      redColor: "#f10e41",
      blackColor: "#000",
      greenColor: "#3bb7ab",
    },
  },
  typography: {
    // h2: {
    //   fontSize: "40px",
    //   textAlign: "center",
    //   color: "#FFF",
    //   fontStyle: "bold",
    //   fontFamily: "poppins",
    // },
    // h3: {
    //   fontSize: "30px",
    //   textAlign: "center",
    //   color: "#fff",
    //   fontStyle: "bold",
    //   fontFamily: "poppins",
    //   fontWeight: "10px",
    // },
    // h4: {
    //   fontSize: "25px",
    //   textAlign: "center",
    //   color: "#fff",
    //   fontStyle: "bold",
    //   fontFamily: "poppins",
    //   fontWeight: "10px",
    // },
    // h5: {
    //   fontSize: "19px",
    //   textAlign: "left",
    //   color: "#000",
    //   fontStyle: "bold",
    //   fontFamily: "poppins",
    // },

    // button: {
    //   fontSize: "13px",
    //   textAlign: "center",
    //   color: "#fff",
    //   fontStyle: "bold",
    //   fontFamily: "poppins",
    //   fontWeight: "10px",
    // },
  },
});