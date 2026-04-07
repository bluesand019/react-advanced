import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
  loading: false,
  error: null,
};

export const getData = createAsyncThunk(
  "weatherData",
  async (city, { rejectWithValue }) => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!response.ok) {
        return rejectWithValue("API error: " + response.status);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("Oops an error occurred!");
    }
  },
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.info = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
