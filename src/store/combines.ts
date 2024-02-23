import blogsSlice from "@/store/slices/blogsSlice";
import searchService from "@/store/slices/searchSlice";

import { combineReducers } from "@reduxjs/toolkit";

const combines = combineReducers({
  blogs: blogsSlice,
  search: searchService,
});

export default combines;
