import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "reset.css";
import NotFoundPage from "./pages/NonFoundPage/NonFoundPage";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Ingredients from "./pages/Ingredients/Ingredients";
import Fridge from "./pages/Fridge/Fridge";
import { getRecipesAsync } from "store/recipes/recipes";
import Navigation from "./Navigation/Navigation";
import Spinner from "components/Spinner/Spinner";
import Heading from "components/Heading/Heading";

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <NotFoundPage />,
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

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { isLoading } = recipes;

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router}>
        <Heading>React Router</Heading>
        {isLoading && <Spinner />}
      </RouterProvider>
    </>
  );
}

export default App;
