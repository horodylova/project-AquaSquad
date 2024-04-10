

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedDate: new Date().toISOString(),
  waterConsumed: 0,
};

const rootSlice = createSlice({
  name: 'waterSelected',
  initialState,
  reducers: {
    selectDayAction: (state, action) => {
      // state.selectedDate = action.payload.toISOString();
      state.selectedDate = action.payload;
    },
  },
});

export const actions = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
