import Image from "components/Image/Image";
import logo from "./logo.png";

const Logo = () => (
  <Image
    src={logo}
    alt="Logo"
    objectFit="cover"
    boxSize="50px"
    minWidth="50px"
  />
);

export default Logo;
