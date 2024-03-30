import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    username: null,
    password: null,
    gender: "man",
    dailyNorma: null,
  },
  token: null,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.user.username = action.payload;
    },
    setPassword(state, action) {
      state.user.password = action.payload;
    },
    setGender(state, action) {
      state.user.gender = action.payload;
    },
    setDailyNorma(state, action) {
      state.user.dailyNorma = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setGender,
  setDailyNorma,
  setToken,
  setError,
  setIsAuthenticated,
} = authSlice.actions;

export default authSlice.reducer;


