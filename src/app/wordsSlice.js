import { createSlice } from "@reduxjs/toolkit";

export const wordsSlice = createSlice({
  name: "words",
  initialState: {
    lists: [],
    isLoading: true,
  },
  reducers: {
    setLists: (state, action) => {
      state.lists = action.payload;
    },
    addList: (state, action) => {
      state.lists = [...state.lists, action.payload];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLists, addList, setIsLoading } = wordsSlice.actions;

export const selectList = (state) => state.words.lists;
export const selectIsLoading = (state) => state.words.isLoading;

export default wordsSlice.reducer;
