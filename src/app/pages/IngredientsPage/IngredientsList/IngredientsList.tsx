import Flex from "components/Flex/Flex";
import Ingredient from "./Ingredient/Ingredient";
import { Ingredient as IngredientProps } from "lib/types";

type IngredientsProps = {
  ingredients: {
    ingredients: IngredientProps[];
  };
  isLoading?: boolean;
};

const IngredientsList = ({ ingredients }: IngredientsProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.ingredients.map((ingredient) => {
        return <Ingredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default IngredientsList;
