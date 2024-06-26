import Flex from "components/Flex/Flex";
import FridgeIngredient from "./FridgeIngredient/FridgeIngredient";
import { Ingredient as FridgeIngredientProps } from "lib/types";

type FridgeIngredientsProps = {
  ingredients: {
    ingredients: FridgeIngredientProps[];
  };
  isLoading?: boolean;
};
const FridgeIngredientsList = ({ ingredients }: FridgeIngredientsProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.ingredients.map((ingredient) => {
        return <FridgeIngredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default FridgeIngredientsList;
