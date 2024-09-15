import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import initialIngredients from "store/ingredients/initialIngredients";

export default function SimpleSlider() {
  const apiCdnUrl = `https://spoonacular.com/cdn/`;
  const imageSize = `100x100`;
  const imageUrl = `${apiCdnUrl}ingredients_${imageSize}/`;
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    variableWidth: true,
  };
  return (
    <Slider {...settings}>
      {initialIngredients.map((ingredient) => (
        <img
          height="100px"
          width="100px"
          src={`${imageUrl}${ingredient.image}`}
        />
      ))}
    </Slider>
  );
}
