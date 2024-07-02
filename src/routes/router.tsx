import { createBrowserRouter } from "react-router-dom";
import Fridge from "app/pages/FridgePage/FridgePage";
import Home from "app/pages/HomePage/HomePage";
import Ingredients from "app/pages/IngredientsPage/IngredientsPage";
import Recipes from "app/pages/RecipesPage/RecipesPage";
import App from "app/App";
import NotFoundPage from "app/pages/NonFoundPage/NonFoundPage";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "ingredients",
        element: <Ingredients />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "fridge",
        element: <Fridge />,
      },
    ],
  },
]);

export default router;
