import { createReducer } from '@reduxjs/toolkit';
import { setSelectedDate, setWaterConsumed } from './actions';

const initialState = {
  selectedDate: null,
  waterConsumed: 0,
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedDate, (state, action) => {
      state.selectedDate = action.payload;
    })
    .addCase(setWaterConsumed, (state, action) => {
      state.waterConsumed = action.payload;
    });
});

export default rootReducer;
