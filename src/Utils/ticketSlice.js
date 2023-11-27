import { createSlice } from "@reduxjs/toolkit";

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    items: [],
  },
  reducers: {
    addTicket: (state, action) => {
      state.items = (action.payload);
    },
  },
});

export const {addTicket} = ticketSlice.actions;

export default ticketSlice.reducer;