import { createTheme as createMUITheme } from "@mui/material/styles";

const themeName = "light";
const primaryColor = "#655bef";
const secondaryColor = "#49d8cd";

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
