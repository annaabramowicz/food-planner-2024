import Flex from "components/Flex/Flex";
import FridgeIngredient from "./FridgeIngredient/FridgeIngredient";
import { IngredientsProps } from "lib/types";

const FridgeIngredientsList = ({ ingredients }:IngredientsProps) => {
  return (
    <Flex mt={2} flexWrap="wrap" justifyContent="space-around">
      {ingredients.ingredients.map((ingredient) => {
        return <FridgeIngredient key={ingredient.id} ingredient={ingredient} />;
      })}
    </Flex>
  );
};

export default FridgeIngredientsList;
