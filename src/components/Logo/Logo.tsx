import Image from "components/Image/Image";
import a from "./a.png";

const Logo = () => (
  <Image src={a} alt="Logo" objectFit="cover" boxSize="50px" minWidth="50px" />
);

export default Logo;
