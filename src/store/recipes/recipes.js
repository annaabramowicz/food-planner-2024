import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getInitialRecipesFromApi,
  getRecipesWithParamFromApi,
} from "services/foodApi";
import { Recipes } from "lib/types";

// type InitialState = {
//   recipes: Recipes[];
//   loadingRecipes: null[];
//   isLoading: boolean;
// };

// //initial state
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
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      } else {
        return thunkAPI.rejectWithValue("Unexpected error");
      }
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
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      } else {
        return thunkAPI.rejectWithValue("Unexpected error");
      }
    }
  }
);

const slice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInitialRecipesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getInitialRecipesAsync.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.recipes = payload;
        }
      )
      .addCase(getInitialRecipesAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(getRecipesWithParamAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getRecipesWithParamAsync.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.recipes = payload?.length ? [...payload] : [...state.recipes];
        }
      )
      .addCase(getRecipesWithParamAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message || "Something went worng";
      });
  },
});

export default slice.reducer;
