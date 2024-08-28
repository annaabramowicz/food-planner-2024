import App from "app/App";
import FridgePage from "app/pages/FridgePage/FridgePage";
import HomePage from "app/pages/HomePage/HomePage";
import IngredientsPage from "app/pages/IngredientsPage/IngredientsPage";
import NotFoundPage from "app/pages/NonFoundPage/NonFoundPage";
import RecipesPage from "app/pages/RecipesPage/RecipesPage";
import { createMemoryRouter } from "react-router-dom";

export const router = createMemoryRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    path: "/",
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "ingredients",
        element: <IngredientsPage />,
      },
      {
        path: "recipes",
        element: <RecipesPage />,
      },
      {
        path: "fridge",
        element: <FridgePage />,
      },
    ],
  },
]);
