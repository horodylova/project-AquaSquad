import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
 updateAvatar
  // updateUserProfileInfo,
} from '../auth/authOperations';

const initialState = {
  user: {
    username: null,//null
    password: '',//null
    gender: 'man',
    dailyNorma: null,
    avatarURL: '',
    email: "",
  },
  token: null,
  error: null,
  isAuthenticated: false, //false
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

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(login.pending, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(logOut.pending, (state) => {
        state.isAuthenticated = false;
      })

      .addCase(logOut.fulfilled, () => {
        return initialState;
         
      })
      .addCase(logOut.rejected, (state) => {
        state.isAuthenticated = false;
      })
      .addCase(updateAvatar.fulfilled, (state, {payload}) => {
        state.user.avatarURL = payload;
        console.log(action.payload);
      })
      // .addCase(updateUserProfileInfo.fulfilled, (state, action) => {
      //   state.user.gender = action.payload.gender;
      //   state.user.username = action.payload.userName;
      //   state.user.email = action.payload.email;
      // });
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
// export const authReducer = authSlice.reducer;
