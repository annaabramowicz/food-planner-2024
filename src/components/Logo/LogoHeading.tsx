import Image from "components/Image/Image";
import logoHeading from "./logoHeading.png";

const LogoHeading = () => (
  <Image
    src={logoHeading}
    alt="Logo"
    objectFit="cover"
    boxSize="50px"
    minWidth="50px"
  />
);

export default LogoHeading;
