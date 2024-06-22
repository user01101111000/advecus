import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAdvice from "../../api/adviceAPI";

const inititalState = {
  isLoading: true,
  data: {},
  error: false,
};

const fetchAdviceData = createAsyncThunk("fetchAdviceData", async () => {
  let data = null;
  do {
    data = await fetchAdvice();
  } while (data.id == localStorage.getItem("prevId"));

  localStorage.setItem("prevId", data.id);

  return data;
});

const adviceSlicer = createSlice({
  name: "advice",
  initialState: inititalState,
  extraReducers: (builder) => {
    builder.addCase(fetchAdviceData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAdviceData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAdviceData.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});

export { fetchAdviceData };

export default adviceSlicer.reducer;
