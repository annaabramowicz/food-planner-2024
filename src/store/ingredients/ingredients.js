// import { getIngredientsWithParamFromApi } from "services/foodApi";
import initialIngredients from "./initialIngredients";
import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = { ingredients: [], isLoading: false };

const slice = createSlice({
  name: "ingredients",
  initialState: initialState,
  reducers: {
    getIngredientsStarted: (state) => {
      state.ingredients = initialIngredients;
      state.isLoading= true;
    },
    getIngredientsSuccess: (state, { payload }) => {
      state.ingredients.push(payload);
      state.isLoading= false;

    },
    // getIngredientsFail: (state, action) =>
    // { ...state, isLoading: false },
  },
});

// // THUNKS
// export const getIngredientsWithParamAsync =
//   (searchParam) => async (dispatch, getState) => {
//     const { isLoading } = getState().ingredients;
//     if (!isLoading) {
//       dispatch(getIngredientsStarted());

//       try {
//         const result = await getIngredientsWithParamFromApi(searchParam);
//         dispatch(getIngredientsSuccess(result));
//       } catch (err) {
//         dispatch(getIngredientsFail(err));
//       }
//     }
//   };
export const { getIngredientsStarted, getIngredientsSuccess } = slice.actions;

export default slice.reducer;
