import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import initialIngredients from "store/ingredients/initialIngredients";
import config from "config/env";
import { colorFifth, colorFourth } from "app/style/theme/theme";

export default function IngredientsSlider() {
  const imageSize = `100x100`;
  const imageUrl = `${config.apiCdnUrl}ingredients_${imageSize}/`;
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageStyle: React.CSSProperties = {
    height: "150px",
    width: "150px",
    objectFit: "scale-down",
    borderRadius: "50%",
    border: `2px solid ${colorFourth}`,
    margin: "0 auto",
    backgroundColor: colorFifth,
  };

  return (
    <div style={{ width: "100%", marginTop: "40px" }}>
      <Slider {...settings}>
        {initialIngredients.map((ingredient) => (
          <div key={ingredient.id}>
            <img
              src={`${imageUrl}${ingredient.image}`}
              alt={ingredient.name}
              style={imageStyle}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
