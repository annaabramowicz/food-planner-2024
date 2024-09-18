import Image from "components/Image/Image";
import logo from "./logo.png";

const Logo = () => (
  <Image
    src={logo}
    alt="Logo"
    objectFit="cover"
    boxSize="200px"
    minWidth={{ lg: "250px" }}
    marginTop={7}
  />
);

export default Logo;
