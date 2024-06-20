import RecipesList from "./RecipesList/RecipesList";
import Spinner from "components/Spinner/Spinner";
import { useRecipesData } from "store/recipes/recipes";

const RecipesPage = () => {
  const recipesState = useRecipesData();
  const { recipes, loadingRecipes, isLoading } = recipesState;
  const renderedRecipes = isLoading ? loadingRecipes : recipes;

  return (
    <>
      <RecipesList renderedRecipes={renderedRecipes} />
      {isLoading && <Spinner />}
    </>
  );
};

export default RecipesPage;
