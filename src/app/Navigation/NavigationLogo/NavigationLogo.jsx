import Logo from "components/Logo/Logo";
import { NavLink } from "react-router-dom";

const NavigationLogo = (props) => (
  <NavLink to="/" {...props}>
    <Logo />
  </NavLink>
);

export default NavigationLogo;
