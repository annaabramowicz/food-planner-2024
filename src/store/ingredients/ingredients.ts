import { getIngredientsWithParamFromApi } from "services/foodApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialIngredients from "./initialIngredients";
import { ResultIngredientsResponse } from "lib/types";

type InitialState = {
  ingredients: ResultIngredientsResponse[];
  isLoading: boolean;
  error?: null | string;
};

const initialState: InitialState = {
  ingredients: initialIngredients,
  isLoading: false,
  error: null,
};

export const getIngredientsWithParamAsync = createAsyncThunk(
  "getIngredientsWithParam",
  async (searchParam: string, thunkAPI) => {
    try {
      const result = await getIngredientsWithParamFromApi(searchParam);
      return result;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  }
);

const slice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsWithParamAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getIngredientsWithParamAsync.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.ingredients = payload;
      })
      .addCase(getIngredientsWithParamAsync.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      });
  },
});

export default slice.reducer;
