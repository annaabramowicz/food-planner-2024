import IngredientsList from "app/IngredientsList/IngredientsList";
import Spinner from "components/Spinner/Spinner";
import { useSelector } from "react-redux";
import { getIngredients } from "store/ingredients/ingredients";

const IngredientsPage = () => {
  const ingredients = useSelector(getIngredients);
  const { isLoading } = ingredients;
  
  return (
    <>
      Ingredients
      {isLoading && <Spinner />}
      <IngredientsList ingredients={ingredients.ingredients} />
    </>
  );
};

export default IngredientsPage;
