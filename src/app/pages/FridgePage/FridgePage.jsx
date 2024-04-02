import { useSelector } from "react-redux";
import FridgeIngredientsList from "./FridgeIngredientsList/FridgeIngredientsList";
import { getFridgeState } from "store/fridge/fridge";

const FridgePage = () => {
  const fridgeIngredients = useSelector(getFridgeState);

  return (
    <>
      {fridgeIngredients && (
        <FridgeIngredientsList ingredients={fridgeIngredients} />
      )}
    </>
  );
};
export default FridgePage;
