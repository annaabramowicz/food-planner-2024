import { getIngredientsWithParamFromApi } from "services/foodApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import initialIngredients from "./initialIngredients";

//initial state
const initialState = { ingredients: initialIngredients, isLoading: false };

// THUNKS
export const getIngredientsWithParamAsync = createAsyncThunk(
  "getIngredientsWithParam",
  async (searchParam, thunkAPI) => {
    try {
      const result = await getIngredientsWithParamFromApi(searchParam);
      console.log(result)
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
