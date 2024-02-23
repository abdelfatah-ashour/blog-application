import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  value: string;
};

const initialState: initialStateType = {
  value: "",
};

const searchService = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setSearchValue: function (state, { payload }: { payload: string }) {
      state.value = payload;
    },
  },
});

export const { setSearchValue } = searchService.actions;

export default searchService.reducer;
