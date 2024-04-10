import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://water-tracker-backend-ob6w.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const login = createAsyncThunk(
  'login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'logout',
  async (credentials, thunkAPI) => {
    try {
      await axios.post('/auth/logout', credentials);
      token.unset();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserAvatar = async (newPhotoFile) => {
  const {
    data: { avatarURL },
  } = await axios.patch('/users/avatar', newPhotoFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatarURL;
};

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (newPhotoFile, { rejectWithValue }) => {
    try {
      const avatarURL = await updateUserAvatar(newPhotoFile);
      toast.success(`The photo has been successfully uploaded.`);
      return avatarURL;
    } catch (error) {
      toast.error(
        `Unfortunately, the photo did not upload successfully. Please try again later.`
      );
      return rejectWithValue(error.massage);
    }
  }
);

export const updateUserProfile = async (newUserProfile) => {
  const dataForSend = {};
  const entries = Object.entries(newUserProfile);
  entries.forEach(([key, value]) => {
    if (value) {
      dataForSend[key] = value;
    }
  });
  if (!dataForSend.newPassword) {
    delete dataForSend.oldPassword;
  }
  const { data } = await axios.patch('/users/current', dataForSend);
  return data;
};

export const updateUserProfileData = createAsyncThunk(
  'auth/updateUserProfileData',
  async (newProfile, { rejectWithValue }) => {
    try {
      const response = await updateUserProfile(newProfile);
      return response;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `This email is already in use by another user. Please try a different address.`
          );
          return rejectWithValue(error.massage);
        case 401:
          toast.error(
            `The old password is incorrect. Please try entering the correct password.`
          );
          return rejectWithValue(error.massage);
        default:
          toast.error(`Error. Please try again later.`);
          return rejectWithValue(error.massage);
      }
    }
  }
);

export const refreshUser = createAsyncThunk('/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    token.set(persistedToken);
    const res = await axios.get('/users/current');

    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
