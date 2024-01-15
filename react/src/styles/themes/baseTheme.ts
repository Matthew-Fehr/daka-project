import createTheme from "@mui/material/styles/createTheme";
import {
  dakaYellow,
  mainBackground,
  cardContainer,
  navbarText,
  lightText,
  darkText,
  blueLink,
  greyText,
  boxContainer,
} from "../Colors";

const baseTheme = createTheme({
  name: "base",
  // breakpoints: {
  //     values: {
  //         xs: 0,
  //         sm: 450,
  //         md: 750,
  //         lg: 1050,
  //         xl: 1250,
  //     },
  // },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,

    button: {
      fontFamily: "Sans-Serif",
      fontSize: 16,
      fontWeight: "bold",
      fontStyle: "italic",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: dakaYellow,
    },
    background: {
      default: mainBackground,
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,

    common: {
      dakaYellow,
      cardContainer,
      navbarText,
      lightText,
      darkText,
      blueLink,
      greyText,
      boxContainer,
    },
  },

  // here you can define styles,... for components globally
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          paddingRight: "1.5rem",
          paddingLeft: "1.5rem",
          color: lightText,
          backgroundColor: mainBackground,
          "&:hover": { backgroundColor: mainBackground },
        },
        containedSecondary: {
          backgroundColor: mainBackground,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: mainBackground,
          borderRadius: "10px",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        filled: {
          backgroundColor: mainBackground,
          color: lightText,
          borderRadius: "20px",
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          ":before": {
            borderBottom: "0",
            content: "none",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: lightText,
          marginTop: "0rem",
          transform: "translate(14px, 2px) scale(0.75)",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          // marginTop:"1rem",
          // transform: "translate(14px, 2px) scale(0.75)",
        },
      },
    },
  },

  shape: {
    borderRadius: 2,
  },
});

export default baseTheme;
