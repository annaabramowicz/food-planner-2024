import { useSelector } from "react-redux";
import FridgeIngredientsList from "./FridgeIngredientsList/FridgeIngredientsList";

const FridgePage = () => {
  const fridgeIngredients = useSelector((state) => state.fridge);

  return (
    <>
      {fridgeIngredients && (
        <FridgeIngredientsList ingredients={fridgeIngredients} />
      )}
    </>
  );
};
export default FridgePage;
