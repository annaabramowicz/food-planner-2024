import Flex from "components/Flex/Flex";
import Recipe from "./Recipe/Recipe";

type RecipesProps = {
  renderedRecipes: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    nutrition: {
      nutrients: { name: string; unit: string; amount: number }[];
    };
  }[];
};

const RecipesList = ({ renderedRecipes }: RecipesProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {renderedRecipes?.map((recipe) => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </Flex>
  );
};

export default RecipesList;
