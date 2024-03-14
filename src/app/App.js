import "reset.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Spinner from "components/Spinner/Spinner";
import Navigation from "./Navigation/Navigation";
import Box from "components/Box/Box";
import routes from "routes/routes";
import MobileHeader from "./MobileHeader/MobileHeader";
import SearchBar from "./SearchBar/SearchBar";
import { getRecipesAsync } from "store/recipes/recipes";

function App() {
  const location = useLocation();

  return (
    <Box
      padding={{ base: "5px 10px", lg: "5px 30px" }}
      overflowX="hidden"
      paddingBottom={{ base: "120px", sm: "0" }}
    >
      <Navigation />
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
