import { createSlice } from "@reduxjs/toolkit";

const globalReducer = createSlice({
  name: "globalSunny",
  initialState: {
    baseUrl: "http://localhost:4000/api/user", // Default URL"
    token: null,
  },
  reducers: {
    setBaseUrl: (state, action) => {
      state.baseUrl = action.payload; //Global URL Update Karne ke liye
    },
    setToken: (state, action) => {
      state.token = action.payload; //update token
    },
    clearToken: (state, action) => {
      state.token = null;
    },
  },
});

export const { setBaseUrl, setToken, clearToken } = globalReducer.actions; //Action export kiye jisse kahi aur access kr skte hai eisee
export default globalReducer.reducer;
