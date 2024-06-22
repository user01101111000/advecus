import { configureStore } from "@reduxjs/toolkit";
import adviceReducer from "../slicers/adviceSlicer";

const store = configureStore({
  reducer: {
    advice: adviceReducer,
  },
});

export default store;
