import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box, CircularProgress, Grid } from "@mui/material";
import { getMessageType } from "../../store/messageType/messageType.actions";
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
  const { messageType, status } = useSelector((state) => state.messageType);
  const [activeIds, setActiveIds] = useState([]);
  const { headings, resetHeadings } = useHeadings();
  useHeadingsObserver(setActiveIds, status === "success");

  useEffect(() => {
    dispatch(getMessageType(id));
  }, []); // eslint-disable-line

  if (status === "success") {
    // return (
    //   <Grid
    //     columnSpacing={{ xs: 0, md: 4 }}
    //     sx={{
    //       width: "100%",
    //       height: "100%",
    //       px: 2,
    //       pt: 12,
    //       pb: 4,
    //     }}
    //     component={"main"}
    //   >
    //     <Grid item xs={12} md={3} position="relative" pt="9rem">
    //       <UITableOfContents headings={headings} activeIds={activeIds} />
    //     </Grid>
    //     <Grid item xs={12} md={9}>
    //       <MessageTypeForm
    //         defaultValues={{ messageType }}
    //         onSectionsChange={() => resetHeadings()}
    //       />
    //     </Grid>
    //   </Grid>
    // );
    return (
      <>
        <div style={{ position: "relative", height: "100%" }}>
          <UITableOfContents headings={headings} activeIds={activeIds} />
        </div>
        <MessageTypeForm
          defaultValues={{ messageType }}
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
