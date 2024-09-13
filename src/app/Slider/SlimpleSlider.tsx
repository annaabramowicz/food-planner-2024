import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "components/Heading/Heading";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Heading>Ania</Heading>
      <Heading>Tomek</Heading>
      <Heading>Ala</Heading>
    </Slider>
  );
}
