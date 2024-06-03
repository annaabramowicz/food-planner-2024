type NutrientsProps = { nutrients: { name: string; unit: string } };

export type RecipeProps = {
  recipe: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    nutrition: NutrientsProps[];
  };
};

export type RecipesProps = { recipes: RecipeProps[] };

export type IngredientProps = {
  ingredient: { id: number; name: string; image: string };
};

export type IngredientsProps = { ingredients: IngredientProps[] };
