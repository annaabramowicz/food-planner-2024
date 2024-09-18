import Logo from "components/Logo/Logo";
import { NavLink } from "react-router-dom";

const NavigationLogo = () => (
  <NavLink to="/">
    <Logo />
  </NavLink>
);

export default NavigationLogo;
