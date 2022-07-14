import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token") ?? null,
  status: null,
  user: JSON.parse(localStorage.getItem("user")) ?? {},
  error: null,
};

const signup = createAsyncThunk("auth/signup", async (userDetail) => {
  const response = await axios.post("/api/auth/signup", {
    ...userDetail,
  });
  return response.data;
});

const login = createAsyncThunk("auth/login", async (userDetail) => {
  const response = await axios.post("/api/auth/login", {
    ...userDetail,
  });
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [signup.pending]: (state) => {
      state.status = "loading";
    },
    [signup.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload.encodedToken;
      state.user = action.payload.createdUser;
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(action.payload.createdUser));
    },
    [signup.rejected]: (state, action) => {
      state.status = "failure";
      state.error = action.payload.errors;
    },
    [login.pending]: (state) => {
      state.status = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.status = "success";
      state.token = action.payload.encodedToken;
      state.user = action.payload.foundUser;
      localStorage.setItem("token", action.payload.encodedToken);
      localStorage.setItem("user", JSON.stringify(action.payload.foundUser));
      console.log(action.payload.foundUser);
    },
    [login.rejected]: (state, action) => {
      state.status = "failure";
      state.error = action.payload.errors;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logout, updateUser } = authSlice.actions;

export { login, signup };
