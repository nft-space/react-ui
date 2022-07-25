import React, { useEffect, useRef } from "react";
import { horizontalLoop } from "../../helper/marquee";
import { gsap } from "gsap";
import { MARQUEE_TEXT_REPEAT } from "../../helper/globals";
import { NewsFeedStarSvg } from "../../assets/svg/NewsFeedStarSvg";

// Import components
import {
  StyledMarqueeContainer,
  StyledMarqueeTextWrapper,
  StyledMarqueeText,
} from "./styles";
import { TextWrapper } from "../../pages/globalStyles";

export const TextMarquee = (props) => {
  const marqueeTextWrapperRef = useRef();
  // Initiate marquee on page load
  useEffect(() => {
    gsap.utils.toArray(marqueeTextWrapperRef.current).map((line, i) => {
      const links = line.children;
      return horizontalLoop(links, {
        repeat: -1,
        speed: 1.5 + i * 0.5,
        reversed: false,
        paddingRight: parseFloat(
          gsap.getProperty(links[0], "marginRight", "px")
        ),
      });
    });
  }, []);
  return (
    <StyledMarqueeContainer>
      <StyledMarqueeTextWrapper ref={marqueeTextWrapperRef}>
        {[...Array(MARQUEE_TEXT_REPEAT)].map((_, index) => {
          return (
            <StyledMarqueeText key={index}>
              <TextWrapper>{props.children}</TextWrapper>
              <NewsFeedStarSvg />
            </StyledMarqueeText>
          );
        })}
      </StyledMarqueeTextWrapper>
    </StyledMarqueeContainer>
  );
};
