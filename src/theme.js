import { createTheme as createMUITheme } from "@mui/material/styles";

const themeName = "light";
export const primaryColor = "#556ff6";
export const secondaryColor = "#49d8cd";
export const darkestBgColor = "#141639";
export const darkBgColor = "#2f315b";
export const darkColor = "#a2b1ff";

/**
 * MUI Theme
 * --------------------------------------------------------------
 */
export const MUITheme = createMUITheme({
  palette: {
    type: themeName,
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
});
