import Flex from "components/Flex/Flex";
import Recipe from "./Recipe/Recipe";
import { useSelector } from "react-redux";
import { getRecipes } from "store/recipes/recipes";

const RecipesList = () => {
  const recipes = useSelector(getRecipes);

  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {recipes.recipes.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </Flex>
  );
};

export default RecipesList;
