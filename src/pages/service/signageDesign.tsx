"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ServiceDetailsArea from "@/components/service/service-details-area";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import HeaderOne from "@/layouts/headers/header-one";
import { servicePanel } from "@/utils/panel-animation";
import GraphicDetailsArea from "@/components/service/service-details/graphic-design-details";
import FooterText from "@/components/mine/footertext";
import VectorDetailsArea from "@/components/service/service-details/vector-graphics-details";
import SignageDetailsArea from "@/components/service/service-details/signage-details";
import FooterOne from "@/layouts/footers/footer-one";

const SignageDetailsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service details area */}
            <SignageDetailsArea/>
            {/* service details area */}

            {/* line image slider  */}
            <LineImgSlider />
            {/* line image slider  */}

            {/* big text */}
            {/* <BigText /> */}
            <FooterText/>
            {/* big text */}
          </main>

          {/* footer area */}
          {/* <FooterTwo topCls="" /> */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default SignageDetailsMain;
