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
export type RecipesResponse = {
  results: ResultRecipesResponse[];
  offset: number;
  number: number;
  totalResults: number;
};

export type ResultRecipesResponse = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  nutrition: Nutrition;
};

export type Nutrition = {
  nutrients: Nutrient[];
};

export type Nutrient = {
  name: string;
  amount: number;
  unit: string;
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

export type IngredientsResponse = {
  results: ResultIngredientsResponse[];
  offset: number;
  number: number;
  totalResults: number;
};

export type ResultIngredientsResponse = {
  id: number;
  name: string;
  image: string;
};
