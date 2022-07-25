import React from "react";
import Slider from "react-slick";
import { DEFAULT_CAROUSEL_SLIDER_SETTINGS } from "../../../helper/globals";

export const DefaultCarousel = (props) => {
  const settings = DEFAULT_CAROUSEL_SLIDER_SETTINGS;
  return <Slider {...settings}>{props.children}</Slider>;
};
