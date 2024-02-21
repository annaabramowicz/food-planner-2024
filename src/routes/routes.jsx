import Fridge from "app/pages/Fridge/Fridge";
import Home from "app/pages/Home/Home";
import Ingredients from "app/pages/Ingredients/Ingredients";
import Recipes from "app/pages/Recipes/Recipes";
import {
  IoHomeOutline,
  IoCartOutline,
  IoLibraryOutline,
  IoJournalOutline,
} from "react-icons/io5";

const routes = [
  { path: "/",
    title: "Home",
    component: <Home />,
    icon: IoHomeOutline },
  {
    path: "/ingredients",
    title: "Ingredients",
    component: <Ingredients />,
    icon: IoCartOutline,
  },
  {
    path: "/fridge",
    title: "Fridge",
    component: <Fridge />,
    icon: IoJournalOutline,
  },
  {
    path: "/recipes",
    title: "Recipes",
    component: <Recipes />,
    icon: IoLibraryOutline,
  },
];

export default routes;
