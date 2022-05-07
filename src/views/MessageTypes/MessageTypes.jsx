import { Container } from "@mui/material";
import React from "react";
import MessageTypesTable from "./MessageTypesTable";

function MessageTypes() {
  return (
    <Container sx={{ mt: "2rem" }}>
      <MessageTypesTable />
    </Container>
  );
}

export default MessageTypes;
