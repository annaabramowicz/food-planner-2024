import "./App.css";
import "reset.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getRecipesAsync } from "store/recipes/recipes";
import Spinner from "components/Spinner/Spinner";
import Navigation from "./Navigation/Navigation";

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { isLoading } = recipes;

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      {isLoading && <Spinner />}
      <Outlet />
    </>
  );
}

export default App;
