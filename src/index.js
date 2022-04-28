import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { MUITheme } from "./theme";
import store from "./store/store";
import "./index.css";

console.log(
  "process.env.REACT_APP_ENV_API_KEY:",
  process.env.REACT_APP_ENV_API_KEY
);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <CssBaseline />
      <MUIThemeProvider theme={MUITheme}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LocalizationProvider>
      </MUIThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
