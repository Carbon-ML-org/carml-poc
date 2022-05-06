import React from "react";
import { useSelector } from "react-redux";
import { SAppMain } from "./AppMain.styles";

function AppMain({ children }) {
  const { headerHeight } = useSelector((state) => state.ui);
  return <SAppMain topMargin={headerHeight}>{children}</SAppMain>;
}

export default AppMain;
