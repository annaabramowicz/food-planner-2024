import { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDebounce } from "react-use";
import { getIngredientsWithParamAsync } from "store/ingredients/ingredients";
import { getRecipesWithParamAsync } from "store/recipes/recipes";
import { useAppDispatch } from "store/useAppDispatch";

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isCurrentRouteIngredients = pathname === "/ingredients";
  const isCurrentRouteRecipes = pathname === "/recipes";

  const postAction =
    !isCurrentRouteIngredients && !isCurrentRouteRecipes
      ? () => navigate("/recipes")
      : undefined;

  const searchBarAction = (value: string) =>
    isCurrentRouteIngredients
      ? dispatch(getIngredientsWithParamAsync(value))
      : dispatch(getRecipesWithParamAsync(value));

  useDebounce(
    () => {
      if (postAction && searchTerm) postAction();
      if (searchTerm !== "") {
        searchBarAction(searchTerm);
      }
    },
    2000,
    [searchTerm]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return handleChange;
};

export default useSearch;
