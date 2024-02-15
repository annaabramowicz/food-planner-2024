import Navigation from "./Navigation/Navigation";
import Spinner from "components/Spinner/Spinner";
import Heading from "components/Heading/Heading";
import routes from "routes/router";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getRecipes, getRecipesAsync } from "store/recipes/recipes";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "reset.css";

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(getRecipes);
  const { isLoading } = recipes.recipes;

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, [dispatch]);

  return (
    <>
      <Heading>React Router</Heading>
      <Navigation routes={routes} />
      {isLoading && <Spinner />}
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
}

export default App;
