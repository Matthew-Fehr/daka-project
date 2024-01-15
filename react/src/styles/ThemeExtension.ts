import "@mui/material/styles/createPalette";

// extend palette
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    // main colors
    dakaYellow: string;
    mainBackground: string;

    // property cards
    cardContainer: string;

    boxContainer: string;

    // text colors
    navbarText: string;
    lightText: string;
    darkText: string;
    blueLink: string;
    greyText: string;
  }
}
declare module "@mui/material/styles" {
  interface CustomTheme {
    name: string;
  }
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}
