import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, CircularProgress } from "@mui/material";
import MessageTypesTable from "./MessageTypesTable";
import { getMessageTypes } from "../../store/messageTypes/messageTypes.actions";
import { updatePageTitle } from "../../store/ui/ui.actions";
import { MESSAGE_TYPES_COLUMNS } from "./MessageTypes.constants";
import { parseMessageTypes } from "./MessageTypes.utils";

function MessageTypes() {
  const dispatch = useDispatch();
  const { messageTypes, status } = useSelector((state) => state.messageTypes);

  useEffect(() => {
    dispatch(updatePageTitle("Message Types"));
    dispatch(getMessageTypes());
  }, [dispatch]);

  const messageTypesRows = useMemo(
    () => parseMessageTypes(messageTypes),
    [messageTypes]
  );

  function renderResult() {
    if (status === "success") {
      return (
        <MessageTypesTable
          columns={MESSAGE_TYPES_COLUMNS}
          rows={messageTypesRows}
        />
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

  return <Container sx={{ mt: "2rem" }}>{renderResult()}</Container>;
}

export default MessageTypes;
