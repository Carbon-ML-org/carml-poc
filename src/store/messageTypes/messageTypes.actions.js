import { API } from "aws-amplify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMessageTypes = createAsyncThunk(
  "messageTypes/getMessageTypes",
  async () => {
    const res = await API.get("CarmlApi", "/message-types");
    return res.body;
  }
);

export const getMessageType = createAsyncThunk(
  "messageTypes/getMessageType",
  async (id) => {
    const res = await API.get("CarmlApi", `/message-types/${id}`);
    return res.body.messageType;
  }
);
