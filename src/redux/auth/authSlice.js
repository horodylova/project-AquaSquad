import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, refreshUser, updateAvatar } from '../auth/authOperations';

const defaultUser = {
  username: null,
  password: null,
  gender: 'man',
  dailyNorma: null,
  avatar: '',
  email: '',
};

const initialState = {
  user: { ...defaultUser },
  token: null,
  error: null,
  isAuthenticated: false,
  isFetchingCurrentUser: false,
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
        state.user = { ...defaultUser, ...action.payload.user };
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
        console.log({ ...state.user });
        console.log(action.payload);
        console.log(action.payload.user);

        // state.user = { ...defaultUser, ...action.payload.user };
        state.user.email = action.payload.user.email;
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
      .addCase(refreshUser.pending, (state) => {
        state.isFetchingCurrentUser = true;
        state.isAuthenticated = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuthenticated = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.token = null;
        state.isAuthenticated = false;
        state.isFetchingCurrentUser = false;
      });
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
