import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalReducer";
const store = configureStore({
  reducer: {
    globalSunny: globalReducer, //Reducer ko yeha add karna hai
  },
});

export default store;
