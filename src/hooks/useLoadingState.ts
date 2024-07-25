import { useIngredientsData } from "store/ingredients/ingredients";
import { useRecipesData } from "store/recipes/recipes";

const useLoadingState = () => {
  const { isLoading: isIngredientsLoading } = useIngredientsData();
  const { isLoading: isRecipesLoading } = useRecipesData();

  const isLoading = isIngredientsLoading || isRecipesLoading;
  return isLoading;
};

export default useLoadingState;
