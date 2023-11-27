import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    items: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.items= (action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;