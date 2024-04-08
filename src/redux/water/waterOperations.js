import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getDayWater, getMonthWater } from '../Calendar/calendarOperations';
// import { selectDate } from './waterSelectors';

export const addWater = createAsyncThunk(
  'water',
  async (credentials, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState().water.selectedDate;
      const [year, month] = state.split('-');
      const res = await axios.post('/water', credentials);
      await dispatch(getDayWater());
      await dispatch(getMonthWater({ year, month }));
      console.log('res', res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      toast.error('Error add water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'delete',
  async (credentials, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState().water.selectedDate;
      const [year, month] = state.split('-');
      const res = await axios.delete(`/water/${credentials}`);
      await dispatch(getDayWater());
      await dispatch(getMonthWater({ year, month }));
      toast.success('Your entry was deleted :)');
      return res.data;
    } catch (error) {
      toast.error('Error delete water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'edit',
  async ({ id, ...payload }, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState().water.selectedDate;
      const [year, month] = state.split('-');
      const res = await axios.patch(`/water/${id}`, payload);
      await dispatch(getDayWater());
      await dispatch(getMonthWater({ year, month }));
      return res.data;
    } catch (error) {
      toast.error('Error edit water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const waterRate = createAsyncThunk(
  'rate',
  async (payload, { dispatch, rejectWithValue, getState }) => {
    try {
      const state = getState().water.selectedDate;
      const [year, month] = state.split('-');
      const res = await axios.patch('/water/rate', payload);
      await dispatch(getDayWater());
      await dispatch(getMonthWater({ year, month }));
      return res.data;
    } catch (error) {
      toast.error('Error rate water:', error);
      return rejectWithValue(error.response.data.message);
    }
  }
);
