import Fridge from "app/pages/Fridge/Fridge";
import Home from "app/pages/Home/Home";
import Ingredients from "app/pages/Ingredients/Ingredients";
import Recipes from "app/pages/Recipes/Recipes";

const routes = [
  { path: "/", title: "Home", component: <Home /> },
  { path: "/ingredients", title: "Ingredients", component: <Ingredients /> },
  { path: "/fridge", title: "Fridge", component: <Fridge /> },
  { path: "/recipes", title: "Recipes", component: <Recipes /> },
];

export default routes;
