import Carousel from "react-bootstrap/Carousel";
import adImage_1 from "../styleSheet/images/bg-ad-1.png";
// import adImage_2 from "../styleSheet/images/bg-ad-2.jfif";
import adImage_3 from "../styleSheet/images/bg-ad-3.jfif";
import adImage_4 from "../styleSheet/images/bg-ad-4.jfif";

function BoostrapCarousel() {
  return (
    <Carousel>
      <Carousel.Item interval={2000} className="BoostrapCarousel_Item">
        <img className="d-block w-100" src={adImage_1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="BoostrapCarousel_Item">
        <img className="d-block w-100" src={adImage_4} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="BoostrapCarousel_Item">
        <img className="d-block w-100" src={adImage_3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default BoostrapCarousel;
