import { Link, Outlet } from "react-router-dom";
import routes from "routes/routes";

const Navigation = () => (
  <>
    {routes.map((route) => (
      <Link key={route.path} to={route.path}>
        {route.title}
      </Link>
    ))}
    <Outlet />
  </>
);

export default Navigation;
