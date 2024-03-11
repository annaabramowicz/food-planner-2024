import { getRecipesFromApi } from "services/foodApi";

//initial state
const initialState = { recipes: [], isLoading: false };

//ACTION TYPES
const NAMESPACE = "GET_RECIPES_";
const GET_RECIPES_STARTED = `${NAMESPACE}GET_RECIPES_STARTED`;
const GET_RECIPES_SUCCESS = `${NAMESPACE}GET_RECIPES_SUCCESS`;
const GET_RECIPES_FAIL = `${NAMESPACE}GET_RECIPES_FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_STARTED:
      return { ...state, isLoading: true };
    case GET_RECIPES_SUCCESS:
      return {
        recipes: [...state.recipes, ...action.payload],
        isLoading: false,
      };
      case GET_RECIPES_FAIL:
        return { ...state, isLoading: false };
    default:
      return state;
  }
};

//ACTION CREATORS
const getRecipesStarted = () => ({ type: GET_RECIPES_STARTED });
const getRecipesSuccess = (result) => ({
  type: GET_RECIPES_SUCCESS,
  payload: result,
});
const getRecipesFail = (error) => ({ type: GET_RECIPES_FAIL, error });

// THUNKS
export const getRecipesAsync = () => async (dispatch, getState) => {
  const { isLoading } = getState().recipes;

  if (isLoading) {
    return;
  }

  dispatch(getRecipesStarted());

  try {
    const result = await getRecipesFromApi();
    dispatch(getRecipesSuccess(result));
  } catch (err) {
    dispatch(getRecipesFail(err));
  }
};

//SELECTORS
export const getRecipes = (state) => state.recipes;

export default reducer;
