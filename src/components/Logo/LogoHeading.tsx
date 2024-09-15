import Image from "components/Image/Image";
import b from "./b.png";

const LogoHeading = () => (
  <Image
    src={b}
    alt="Logo"
    objectFit="cover"
    boxSize="200px"
    minWidth="200px"
  />
);

export default LogoHeading;
