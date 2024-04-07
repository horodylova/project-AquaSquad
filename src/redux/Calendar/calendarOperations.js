import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const getDayWater = createAsyncThunk('today', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/calendar/today');
    return res.data;
  } catch (error) {
    toast.error('Error get water for this day:', error);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const getMonthWater = createAsyncThunk('month', async (_, thunkAPI) => {
  try {
    const res = await axios.get('/calendar/month', {
      data: {
        month: '04',
        year: '2024',
      },
    });
    return res.data;
  } catch (error) {
    toast.error('Error get water for this month:', error);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
