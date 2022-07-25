import React, { Component } from "react";
import Slider from "react-slick";
import { TRENDING_CAROUSEL_SLIDER_SETTINGS } from "../../../helper/globals";

export class TrendingCarousel extends Component {
  render() {
    const settings = TRENDING_CAROUSEL_SLIDER_SETTINGS;
    return <Slider {...settings}>{this.props.children}</Slider>;
  }
}
