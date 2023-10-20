import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroCarousel = () => {
  const heroImages = [
    {
      imgSrc: "/assets/images/hero-1.svg",
      alt: "smartwatch",
    },
    {
      imgSrc: "/assets/images/hero-2.svg",
      alt: "bag",
    },
    {
      imgSrc: "/assets/images/hero-3.svg",
      alt: "lamp",
    },
    {
      imgSrc: "/assets/images/hero-4.svg",
      alt: "air fryer",
    },
    {
      imgSrc: "/assets/images/hero-5.svg",
      alt: "chair",
    },
  ];

  return (
    <div>
      <Carousel>
        <div>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
