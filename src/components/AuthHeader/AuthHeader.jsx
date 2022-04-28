import { Grid } from "@mui/material";
import React from "react";
import { ReactComponent as CarbonMLLogo } from "../../carbon-ml_logo.svg";

function AuthHeader() {
  return (
    <Grid container justifyContent="center" pb={3}>
      <CarbonMLLogo width="21.438rem" />
    </Grid>
  );
}

export default AuthHeader;
