import LogoHeading from "components/Logo/LogoHeading";
import { NavLink } from "react-router-dom";

const NavigationLogo = () => (
  <NavLink to="/">
    <LogoHeading />
  </NavLink>
);

export default NavigationLogo;
