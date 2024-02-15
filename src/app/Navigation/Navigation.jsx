import { Link } from "react-router-dom";

const Navigation = ({ routes }) => (
  <>
    {routes.map((route) => (
      <Link key={route.path} to={route.path}>{route.title}</Link>
    ))}
  </>
);

export default Navigation;
