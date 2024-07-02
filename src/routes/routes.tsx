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
    component: <HomePage />,
    icon: IoHomeOutline,
  },
  {
    path: "/ingredients",
    title: "Ingredients",
    component: <IngredientsPage />,
    icon: IoCartOutline,
  },
  {
    path: "/fridge",
    title: "Fridge",
    component: <FridgePage />,
    icon: IoJournalOutline,
  },
  {
    path: "/recipes",
    title: "Recipes",
    component: <RecipesPage />,
    icon: IoLibraryOutline,
  },
];

export default routes;
