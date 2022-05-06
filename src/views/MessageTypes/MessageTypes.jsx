import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { SMessageTypes } from "./MessageTypes.styles";
import { getMessageTypes } from "../../store/messageTypes/messageTypes.actions";

function MessageTypes() {
  const dispatch = useDispatch();
  const { messageTypes, status } = useSelector((state) => state.messageTypes);

  console.log("messageTypes:", messageTypes);
  console.log("status:", status);

  useEffect(() => {
    dispatch(getMessageTypes());
  }, []); // eslint-disable-line

  if (status === "success") {
    return (
      <SMessageTypes>
        <p>Create Message Type here...</p>
      </SMessageTypes>
    );
  } else if (status === "failed") {
    return <p>Not found!</p>;
  } else {
    return (
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          minHeight: "50rem",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
}

export default MessageTypes;
