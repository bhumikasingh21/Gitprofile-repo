import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
// import reducer from "../reducers/userReducer";
import userProfileReducer from "../reducers/profileReducer";
const store = configureStore({
  reducer: userProfileReducer,
  // userProfileReducer : userProfileReducer
});

export default store;
