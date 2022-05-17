import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@mui/material";
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
    setTimeout(() => {
      dispatch(getMessageTypes());
    }, 500);
  }, [dispatch]);

  const messageTypesRows = useMemo(
    () => parseMessageTypes(messageTypes),
    [messageTypes]
  );

  return (
    <Container sx={{ mt: "2rem" }}>
      {
        <MessageTypesTable
          columns={MESSAGE_TYPES_COLUMNS}
          rows={messageTypesRows}
          status={status}
        />
      }
    </Container>
  );
}

export default MessageTypes;
