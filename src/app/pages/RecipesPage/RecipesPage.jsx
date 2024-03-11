import RecipesList from "app/RecipesList/RecipesList";
import { useSelector } from "react-redux";
import { getRecipes } from "store/recipes/recipes";

const RecipesPage = () => {
  const recipes = useSelector(getRecipes);

  return (
    <>
      Recipes
      <RecipesList recipes={recipes.recipes} />
    </>
  );
};

export default RecipesPage;
