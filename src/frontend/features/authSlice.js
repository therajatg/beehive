import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") ?? null,
  status: null,
};

const signup = createAsyncThunk("auth/signup", async (userDetail) => {
  const response = await axios.post("/api/auth/signup", {
    ...userDetail,
  });
  return response.data.encodedToken;
});

const login = createAsyncThunk("auth/login", async (userDetail) => {
  const response = await axios.post("/api/auth/login", {
    ...userDetail,
  });
  return response.data.encodedToken;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: {
    [signup.pending]: (state) => {
      state.status = "loading";
    },
    [signup.fulfilled]: (state, action) => {
      state.token = action.payload;
      state.status = "fulfilled";
      localStorage.setItem("token", action.payload);
    },
    [signup.rejected]: (state) => {
      state.status = "error";
    },
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    [login.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;

export { login, signup };
