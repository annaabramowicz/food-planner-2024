import "./App.css";
import "reset.css";
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Spinner from "components/Spinner/Spinner";
import Navigation from "./Navigation/Navigation";
import Box from "components/Box/Box";
import routes from "routes/routes";
import MobileHeader from "./MobileHeader/MobileHeader";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const location = useLocation();
  const recipes = useSelector((state) => state.recipes);
  const { isLoading } = recipes;

  return (
    <Box padding={{ base: "5px 10px", lg: "5px 30px" }} overflowX="hidden">
      <Navigation />
      {isLoading && <Spinner />}
      {routes.map((route) =>
        route.path === location.pathname ? (
          <MobileHeader key={route.title}> {route.title} </MobileHeader>
        ) : null
      )}
      <SearchBar mt={5} display={{ sm: "none" }} />
      <Outlet />
    </Box>
  );
}

export default App;
