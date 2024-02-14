import "reset.css";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getRecipesAsyc } from "store/recipes/recipes";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesAsyc());
  }, [dispatch]);
  
  return <div>Learn React</div>;
}

export default App;
