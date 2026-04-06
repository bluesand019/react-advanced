import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export const getAllData = createAsyncThunk("gitUsers", async () => {
    const response = await fetch('https://api.github.com/users');
    const result = await response.json();
    return result;
})

export const gitUserSlice = createSlice({
  name: "gitUser",
  initialState,
  extraReducers: (builder) => {
  builder
    .addCase(getAllData.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(getAllData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
}
});

export default gitUserSlice.reducer;