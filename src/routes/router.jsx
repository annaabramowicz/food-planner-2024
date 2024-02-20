import { createBrowserRouter } from "react-router-dom";
import Fridge from "app/pages/Fridge/Fridge";
import Home from "app/pages/Home/Home";
import Ingredients from "app/pages/Ingredients/Ingredients";
import Recipes from "app/pages/Recipes/Recipes";
import App from "app/App";
import NotFoundPage from "app/pages/NonFoundPage/NonFoundPage";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ingredients",
        element: <Ingredients />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/fridge",
        element: <Fridge />,
      },
    ],
  },
]);

export default router;
