import IngredientsList from "./IngredientsList/IngredientsList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";

const IngredientsPage = () => {
  const ingredients = useSelector((state) => state.ingredients);
  const { isLoading } = ingredients;

  return (
    <>
      <IngredientsList ingredients={ingredients.ingredients} />
      {isLoading && <Spinner />}
    </>
  );
};

export default IngredientsPage;
