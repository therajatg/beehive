import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") ?? null,
  status: null,
};

const login = createAsyncThunk("/auth/login", async () => {
  const res = await axios.post("/api/auth/login", {
    email: "rajatgupta@gmail.com",
    password: "rajat123",
  });
  return res.data.encodedToken;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.token = localStorage.setItem("token", action.payload);
      state.status = "fulfilled";
    },
  },
});

export const authReducer = authSlice.reducer;
export { login };
