import { createBrowserRouter } from "react-router-dom";
import App from "app/App";
import NotFoundPage from "app/pages/NonFoundPage/NonFoundPage";
import routes from "./routes";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    path: "/",
    children: routes.map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);

export default router;
