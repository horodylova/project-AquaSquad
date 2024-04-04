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
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      token.set(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
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


const address = axios.defaults.baseURL;
export const updateAvatar = async credentials => {

  const {
    data: { avatar },
  } = await address.patch('/users/avatars', credentials, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return avatar;
};

export const updateUserAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (credentials, thunkAPI) => {
    try {
      const avatar = await updateAvatar(credentials);
      toast.success(
        `The photo has been successfully uploaded.`
      );
      return avatar;
    } catch (error) {
      toast.error(`Unfortunately, the photo did not upload successfully. Please try again later.`);
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const updateUserProfile = async newUserProfile => {
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
  const { data } = await address.patch('/users', dataForSend);
  return data;
};

export const updateUserProfileInfo = createAsyncThunk(
  'auth/UserProfile',
  async (newProfile, thunkAPI) => {
    try {
      const response = await updateUserProfile(newProfile);
      return response;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `This email is already in use by another user. Please try a different address.`
          );
          return thunkAPI.rejectWithValue(error.massage);
        case 401:
          toast.error(
            `The old password is incorrect. Please try entering the correct password.`
          );
          return thunkAPI.rejectWithValue(error.massage);
        default:
          toast.error(`Error. Please try again later.`);
          return thunkAPI.rejectWithValue(error.massage);
      }
    }
  }
);
