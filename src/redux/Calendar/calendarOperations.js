import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import dateHandler from '../../components/helpers/dateHandler';

export const getDayWater = createAsyncThunk(
  'today',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/calendar/today', {
        currentDate: dateHandler(),
      });
      return res.data;
    } catch (error) {
      toast.error('Error get water for this day:', error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMonthWater = createAsyncThunk(
  'month',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/calendar/month', credentials);
      return res.data;
    } catch (error) {
      toast.error('Error get water for this month:', error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
