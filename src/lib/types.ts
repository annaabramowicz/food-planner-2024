export type RecipesResponse = {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
};

export type Recipe = {
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

export type IngredientsResponse = {
  results: Ingredient[];
  offset: number;
  number: number;
  totalResults: number;
};

export type Ingredient = {
  id: number;
  name: string;
  image: string;
};
