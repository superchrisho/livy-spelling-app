import { createSlice } from "@reduxjs/toolkit";

// createSlice will create actions and reducers
export const appSlice = createSlice({
  name: "app",
  initialState: {
    title: "Elivia's Spelling Tester",
    selectedLists: [],
  },
  reducers: {
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    updateSelectedLists: (state, action) => {
      state.selectedLists = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTitle, updateSelectedLists } = appSlice.actions;

export default appSlice.reducer;
