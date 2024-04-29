import RecipesList from "app/RecipesList/RecipesList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";

const RecipesPage = () => {
  const recipesState = useSelector((state) => state.recipes);
  const { recipes, loadingRecipes, isLoading } = recipesState;
  const rederedRecipes = isLoading ? loadingRecipes: recipes;    

  return (
    <>
      <RecipesList rederedRecipes={rederedRecipes} />
      {isLoading && <Spinner />}
    </>
  );
};

export default RecipesPage;
