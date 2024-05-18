type Nutrients = { name: string; unit: string };

type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  nutrition: Nutrients[];
};

export type Recipes = Recipe[];

export type Ingredient = {
  id: number;
  name: string;
  image: string;
};

export type Ingredients = Ingredient[];
