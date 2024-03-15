import RecipesList from "app/RecipesList/RecipesList";
import Spinner from "components/Spinner/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipesAsync } from "store/recipes/recipes";

const RecipesPage = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { isLoading } = recipes;
  const isRecipesEmpty = !Boolean(recipes.recipes.length) ;

  useEffect(() => {
    isRecipesEmpty && dispatch(getRecipesAsync());
  }, [dispatch, isRecipesEmpty]);

  return (
    <>
      <RecipesList />
      {isLoading && <Spinner />}
    </>
  );
};

export default RecipesPage;
