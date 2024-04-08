// import { createReducer } from '@reduxjs/toolkit';
// import { setSelectedDate, setWaterConsumed } from './actions';

// const initialState = {
//   selectedDate: null,
//   waterConsumed: 0,
// };

// const rootReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(setSelectedDate, (state, action) => {
//       state.selectedDate = action.payload;
//     })
//     .addCase(setWaterConsumed, (state, action) => {
//       state.waterConsumed = action.payload;
//     });
// });

// export default rootReducer;

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
      state.selectedDate = action.payload.toISOString();
    },
  },
});

export const actions = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
