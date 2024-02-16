import Heading from "components/Heading/Heading";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Link to="/">
    <Heading> 404 Not Found</Heading>
  </Link>
);

export default NotFoundPage;
