import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

function UIElevationScroll({ children, elevation, window, borderBottom }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? elevation : 0,
    sx: {
      borderBottom: trigger ? "0 none" : borderBottom,
    },
  });
}

UIElevationScroll.defaultProps = {
  elevation: 4,
  borderBottom: "1px solid #e0e0e0",
};

export default UIElevationScroll;
