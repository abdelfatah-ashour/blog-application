import combines from "@/store/combines";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combines,
});
