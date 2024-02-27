import "./App.css";
import "reset.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getRecipesAsync } from "store/recipes/recipes";
import Spinner from "components/Spinner/Spinner";
import Navigation from "./Navigation/Navigation";
import Box from "components/Box/Box";

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const { isLoading } = recipes;

  useEffect(() => {
    dispatch(getRecipesAsync());
  }, [dispatch]);

  return (
    <Box padding={{ base: "5px 10px", lg: "5px 30px" }} overflowX="hidden">
      <Navigation />
      {isLoading && <Spinner />}
      <Outlet />
    </Box>
  );
}

export default App;
