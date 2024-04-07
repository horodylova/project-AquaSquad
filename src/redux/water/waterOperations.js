import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getDayWater, getMonthWater } from '../Calendar/calendarOperations';

export const addWater = createAsyncThunk(
  'water',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.post('/water', credentials);
      await dispatch(getDayWater());
      await dispatch(getMonthWater());
      console.log('res', res.data);
      return res.data;
    } catch (error) {
      toast.error('Error add water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'delete',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.delete(`/water/${credentials}`);
      await dispatch(getDayWater());
      await dispatch(getMonthWater());
      return res.data;
    } catch (error) {
      toast.error('Error delete water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'edit',
  async ({ id, ...payload }, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.patch(`/water/${id}`, payload);
      await dispatch(getDayWater());
      await dispatch(getMonthWater());
      return res.data;
    } catch (error) {
      toast.error('Error edit water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const waterRate = createAsyncThunk(
  'rate',
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const res = await axios.patch('/water/rate', payload);
      await dispatch(getDayWater());
      return res.data;
    } catch (error) {
      toast.error('Error rate water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
