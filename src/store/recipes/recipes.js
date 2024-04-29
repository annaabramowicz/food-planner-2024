import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getInitialRecipesFromApi,
  getRecipesWithParamFromApi,
} from "services/foodApi";

//initial state
const initialState = {
  recipes: [],
  loadingRecipes: [],
  isLoading: false,
};

// THUNKS
export const getInitialRecipesAsync = createAsyncThunk(
  "getInitialRecipes",
  async (searchParam, thunkAPI) => {
    try {
      const result = await getInitialRecipesFromApi(searchParam);
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const getRecipesWithParamAsync = createAsyncThunk(
  "getRecipesWithParam",
  async (searchParam, thunkAPI) => {
    try {
      const result = await getRecipesWithParamFromApi(searchParam);
      return result;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const slice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInitialRecipesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInitialRecipesAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipes = payload;
      })
      .addCase(getInitialRecipesAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(getRecipesWithParamAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecipesWithParamAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.recipes = payload?.length ? [...payload] : [...state.recipes];
      })
      .addCase(getRecipesWithParamAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export default slice.reducer;
