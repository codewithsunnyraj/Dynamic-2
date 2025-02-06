import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "globalSunny",
  initialState: {
    baseUrl: "http://localhost:4000/api/user", // Default URL"
  },
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload; //Global URL Update Karne ke liye
    },
  },
});

export const { setBaseUrl } = globalReducer.actions; //Action export kiye jisse kahi aur access kr skte hai eisee
export default globalReducer.reducer;
