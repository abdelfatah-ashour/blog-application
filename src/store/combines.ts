import blogsSlice from "@/store/slices/blogsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const combines = combineReducers({
  blogs: blogsSlice,
});

export default combines;
