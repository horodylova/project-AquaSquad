// src/features/auth/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: null,
  password: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setUsername, setPassword } = authSlice.actions;

export default authSlice.reducer;

