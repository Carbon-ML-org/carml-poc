import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress } from "@mui/material";
import { getMessageType } from "../../store/messageTypes/messageTypes.actions";
import UITableOfContents from "../../components/UITableOfContents/UITableOfContents";
import MessageTypeForm from "./MessageTypeForm";
import { useHeadings } from "../../hooks/useHeadings";
import useHeadingsObserver from "../../hooks/useHeadingsObserver";

/**
 * MessageTypeView
 * -----------------------------------------------------------
 */
export default function MessageTypeView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { activeMessageType, status } = useSelector(
    (state) => state.messageTypes
  );
  const [activeIds, setActiveIds] = useState([]);
  const { headings, resetHeadings } = useHeadings();
  useHeadingsObserver(setActiveIds, status === "success");

  useEffect(() => {
    dispatch(getMessageType(id));
  }, []); // eslint-disable-line

  if (status === "success") {
    return (
      <>
        <div
          style={{
            position: "relative",
            height: "100%",
            backgroundColor: "#ffffff",
            width: "15rem",
            borderRight: "1px solid #e0e0e0",
            padding: "0 1rem",
          }}
        >
          <UITableOfContents headings={headings} activeIds={activeIds} />
        </div>
        <MessageTypeForm
          defaultValues={{ messageType: activeMessageType }}
          onSectionsChange={() => resetHeadings()}
        />
      </>
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
