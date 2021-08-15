import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import wordsReducer from "./wordsSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    words: wordsReducer,
  },
});
