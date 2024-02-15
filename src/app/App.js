import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getRecipesAsync } from "store/recipes/recipes";
import "reset.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getRecipesAsync());
  }, [dispatch]);
  
  return <div>Learn React</div>;
}

export default App;
