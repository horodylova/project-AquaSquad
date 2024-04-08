import { createSlice } from '@reduxjs/toolkit';
import { getDayWater, getMonthWater } from './calendarOperations';

const initialState = {
  percent: 0,
  dayWater: [],
  monthWater: {},
  // chooseDate: new Date(),
};

const calendarSlice = createSlice({
  name: 'calendarWater',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDayWater.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);
        state.dayWater = action.payload;
        // state.dayWater = action.payload;
        state.percent = action.payload.percent;
      })
      .addCase(getMonthWater.fulfilled, (state, action) => {
        state.monthWater = action.payload.data;
        // state.chooseDate = action.payload;
      });
  },
});

export const calendaReducer = calendarSlice.reducer;
