import { useFridgeData } from "store/fridge/fridge";
import FridgeIngredientsList from "./FridgeIngredientsList/FridgeIngredientsList";

const FridgePage = () => {
  const fridgeIngredients = useFridgeData();

  return (
    <>
      {fridgeIngredients && (
        <FridgeIngredientsList ingredients={fridgeIngredients} />
      )}
    </>
  );
};
export default FridgePage;
