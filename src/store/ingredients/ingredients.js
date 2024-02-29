import { getIngredientsFromApi } from "services/foodApi";

//initial state
const initialState = { ingredients: [], isLoading: false };

//ACTION TYPES
const NAMESPACE = "GET_INGREDIENTS_";
const GET_INGREDIENTS_STARTED = `${NAMESPACE}GET_INGREDIENTS_STARTED`;
const GET_INGREDIENTS_SUCCESS = `${NAMESPACE}GET_INGREDIENTS_SUCCESS`;
const GET_INGREDIENTS_FAIL = `${NAMESPACE}GET_INGREDIENTS_FAIL`;

//REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_STARTED:
      return { ...state, isLoading: true };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ingredients: [...action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};

//ACTION CREATORS
const getIngredientsStarted = () => ({ type: GET_INGREDIENTS_STARTED });
const getIngredientsSuccess = (result) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: result,
});
const getIngredientsFail = (error) => ({ type: GET_INGREDIENTS_FAIL, error });

// THUNKS
export const getIngredientsAsync =
  (searchParam) => async (dispatch, getState) => {
    const { isLoading } = getState().ingredients;

    if (!isLoading) {
      dispatch(getIngredientsStarted());

      try {
        const result = await getIngredientsFromApi(searchParam);
        dispatch(getIngredientsSuccess(result));
      } catch (err) {
        dispatch(getIngredientsFail(err));
      }
    }
  };

//SELECTORS
export const getAllIngredients = (state) => state.ingredients;

export default reducer;
