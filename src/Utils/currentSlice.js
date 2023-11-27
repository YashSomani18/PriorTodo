
import { createSlice } from '@reduxjs/toolkit';

export const currentSlice = createSlice({
  name: 'current',
  initialState: {
    grouping: 'status', 
    sorting: 'priority', 
  },
  reducers: {
    setGrouping: (state, action) => {
      state.grouping = action.payload;
    },
    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
  },
});

export const selectCurrentGrouping = state => state.current.grouping;
export const selectCurrentSorting = state => state.current.sorting;

export const { setGrouping, setSorting } = currentSlice.actions;
export default currentSlice.reducer;