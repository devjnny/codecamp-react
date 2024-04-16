import { ReactNode } from "react";
import Slider from "react-slick";

export const Slick = ({ children }: { children: ReactNode }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Slick;
