import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Grid } from "@mui/material";
import { getMessageType } from "../../store/messageType/messageType.actions";
import UITableOfContents from "../../components/UITableOfContents/UITableOfContents";
import MessageTypeForm from "./MessageTypeForm";
import { useHeadings } from "../../hooks/useHeadings";

/**
 * MessageTypeView
 * -----------------------------------------------------------
 */
export default function MessageTypeView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { messageType, status } = useSelector((state) => state.messageType);
  const { headings, resetHeadings } = useHeadings();

  useEffect(() => {
    dispatch(getMessageType(id));
  }, []); // eslint-disable-line

  if (status === "success") {
    return (
      <Grid
        container
        columnSpacing={{ xs: 0, md: 4 }}
        sx={{
          width: "100%",
          height: "100%",
          px: 2,
          pt: 12,
          pb: 4,
        }}
        component={"main"}
      >
        <Grid item xs={12} md={2} position="relative" pt="9rem">
          <UITableOfContents headings={headings} />
        </Grid>
        <Grid item xs={12} md={10}>
          <MessageTypeForm
            defaultValues={{ messageType }}
            onSectionsChange={() => resetHeadings()}
          />
        </Grid>
      </Grid>
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
