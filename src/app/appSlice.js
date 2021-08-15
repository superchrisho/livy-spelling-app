import { createSlice } from "@reduxjs/toolkit";

// createSlice will create actions and reducers
export const appSlice = createSlice({
  name: "app",
  initialState: {
    title: "Elivia's Spelling Tester",
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateTitle} = appSlice.actions;

export default appSlice.reducer;
