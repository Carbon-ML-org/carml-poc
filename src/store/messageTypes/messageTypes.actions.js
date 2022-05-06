import { API } from "aws-amplify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMessageTypes = createAsyncThunk(
  "messageTypes/getMessageTypes",
  async () => {
    const res = await API.get("CarmlApi", "/message-types");
    return res.body;
  }
);
