import { createSlice } from "@reduxjs/toolkit";

type initialType = {
  isAuth: boolean;
  token: {
    access: string;
    refresh: string;
  };
  userData: Object | null;
};

export const initialState: initialType = {
  isAuth: false,
  token: {
    access: "",
    refresh: "",
  },
  userData: null,
};

const authSlice = createSlice({
  name: "authorization",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.token = {
        access: action.payload.access_token,
        refresh: action.payload.refresh_token,
      };
      state.userData = action.payload.userData;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
