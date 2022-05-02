import { API } from "aws-amplify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMessageType = createAsyncThunk(
  "messageTypes/getMessageType",
  async (id) => {
    const res = await API.get("CarmlApi", `/message-types/${id}`);
    return res.body.messageType;
  }
);
