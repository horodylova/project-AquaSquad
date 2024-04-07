import { createSlice } from '@reduxjs/toolkit';
import { getDayWater, getMonthWater } from './calendarOperations';

const initialState = {
  percent: 0,
  dayWater: [],
  monthWater: {},
};

const calendarSlice = createSlice({
  name: 'calendarWater',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDayWater.fulfilled, (state, action) => {
        state.dayWater = action.payload.takingWater;
        state.percent = action.payload.percent;
      })
      .addCase(getMonthWater.fulfilled, (state, action) => {
        state.monthWater = action.payload.data;
      });
  },
});

export const calendaReducer = calendarSlice.reducer;
