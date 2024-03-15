import Spinner from "components/Spinner/Spinner";
import { getFridge } from "services/localStorage";
import FridgeIngredientsList from "./FridgeIngredientsList/FridgeIngredientsList";

const FridgePage = () => {
  const ingredients = getFridge();
  // const { isLoading } = ingredients;

  return (
    <>
      {/* {isLoading && <Spinner />} */}
      {ingredients && <FridgeIngredientsList ingredients={ingredients} />}
    </>
  );
};
export default FridgePage;
