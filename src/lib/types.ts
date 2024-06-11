export type RecipeProps = {
  recipe: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    nutrition: {
      nutrients: { name: string; unit: string; amount: number }[];
    };
  };
};

export type RecipesProps = {
  renderedRecipes: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    nutrition: {
      nutrients: { name: string; unit: string; amount: number }[];
    };
  }[];
};

export type IngredientProps = {
  ingredient: { id: number; name: string; image: string };
};

export type IngredientsProps = {
  ingredients: {
    ingredients: { id: number; name: string; image: string }[];
  };
  isLoading?: boolean;
};
