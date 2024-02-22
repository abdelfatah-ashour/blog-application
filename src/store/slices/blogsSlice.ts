import { IBlog } from "@/@types/model";
import { fetchBlogsApi } from "@/services/api/blogs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const PER_PAGE_SIZE = 12;

type initialStateType<D> = {
  loading: boolean;
  loaded: boolean;
  data: D;
  error: string;
  page: number;
  isLastPage: boolean;
};

const initialState: initialStateType<IBlog[]> = {
  loading: false,
  loaded: false,
  data: [],
  error: "",
  page: 1,
  isLastPage: false,
};

const fetchBlogs = createAsyncThunk(
  "blogService",
  async function (page: number, { fulfillWithValue, rejectWithValue }) {
    return await fetchBlogsApi(page * PER_PAGE_SIZE)
      .then((blogs) => {
        return fulfillWithValue(blogs.data) as IBlog[];
      })
      .catch(() => {
        return rejectWithValue("something went wrong").payload as string;
      });
  }
);

const blogService = createSlice({
  name: "blogServices",
  initialState,
  reducers: {
    setMetaData: function (state) {
      state.page = state.page + 1;
    },
    resetBlogs: function (state) {
      state.isLastPage = false;
      state.page = 1;
      state.data = [];
      state.error = "";
      state.loading = false;
      state.loaded = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, { payload }) => {
        console.log(state.data.length, payload.length);

        state.loading = false;
        state.loaded = true;
        state.isLastPage = state.data.length === payload.length ? true : false;
        state.page = state.page + 1;
        state.data = payload as IBlog[];
      })
      .addCase(fetchBlogs.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload as string;
      });
  },
});

export const { setMetaData, resetBlogs } = blogService.actions;

export { fetchBlogs };

export default blogService.reducer;
