import FridgePage from "app/pages/FridgePage/FridgePage";
import HomePage from "app/pages/HomePage/HomePage";
import IngredientsPage from "app/pages/IngredientsPage/IngredientsPage";
import RecipesPage from "app/pages/RecipesPage/RecipesPage";
import {
  IoHomeOutline,
  IoCartOutline,
  IoLibraryOutline,
  IoJournalOutline,
} from "react-icons/io5";

const routes = [
  {
    path: "/",
    title: "Home",
    icon: IoHomeOutline,
    element: <HomePage />,
  },
  {
    path: "/ingredients",
    title: "Ingredients",
    icon: IoCartOutline,
    element: <IngredientsPage />,
  },
  {
    path: "/fridge",
    title: "Fridge",
    icon: IoJournalOutline,
    element: <FridgePage />,
  },
  {
    path: "/recipes",
    title: "Recipes",
    icon: IoLibraryOutline,
    element: <RecipesPage />,
  },
];

export default routes;
