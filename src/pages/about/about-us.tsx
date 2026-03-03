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
import FooterTwo from "@/layouts/footers/footer-two";
import AboutUsHero from "@/components/about/about-us-hero";
import AboutUsArea from "@/components/about/about-us-area";
import TeamOne from "@/components/team/team-one";
import FunFactOne from "@/components/fun-fact/fun-fact-one";
import BrandFive from "@/components/brand/brand-five";
import AwardOne from "@/components/award/award-one";
// animation
import { bounceAnimation, charAnimation, fadeAnimation, heroBgAnimation, heroTitleAnim, titleAnimation } from "@/utils/title-animation";
import { hoverBtn } from "@/utils/hover-btn";
import { teamMarqueAnim } from "@/utils/scroll-marque";
import HeaderOne from "@/layouts/headers/header-one";
import HeroBannerTwo from "@/components/hero-banner/hero-banner-two";
import ServiceSix from "@/components/service/service-six";
import ServiceOne from "@/components/service/service-one";
import ServiceTwo from "@/components/service/service-two";
import ServiceThree from "@/components/service/service-three";
import ServiceFour from "@/components/service/service-four";
import ServiceFive from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import StickySlider from "@/components/mine/stickyslider";
import StickySliderLeft from "@/components/mine/stickysliderleft";
import FooterOne from "@/layouts/footers/footer-one";
import AboutOne from "@/components/about/about-one";
import AboutContent from "@/components/mine/aboutcontent";
import VisionMission from "@/components/mine/visionmission";

const AboutUsMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      teamMarqueAnim();
      bounceAnimation();
      fadeAnimation();
      hoverBtn();
        heroTitleAnim();
      heroBgAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });
 useGSAP(() => {
    const timer = setTimeout(() => {
      let sp = gsap.matchMedia();
      sp.add("(min-width: 1200px)", () => {
        if (document.querySelectorAll(".tp-shop-area")) {
          ScrollTrigger.create({
            trigger: ".tp-shop-area",
            start: "top -3%",
            end: "bottom 110.5%",
            pin: ".tp-shop-left-thumb",
            pinSpacing: true,
          });
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  });
 useGSAP(() => {
    const timer = setTimeout(() => {
      let sp = gsap.matchMedia();
      sp.add("(min-width: 1200px)", () => {
        if (document.querySelectorAll(".tp-slide-area")) {
          ScrollTrigger.create({
            trigger: ".tp-slide-area",
            start: "top -3%",
            end: "bottom 110.5%",
            pin: ".tp-slide-left-thumb",
            pinSpacing: true,
          });
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderOne  />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* about hero */}
            <HeroBannerTwo/>
            
            <AboutContent/>
            {/* <AboutUsHero /> */}
            {/* about hero */}
<VisionMission/>
            {/* about area */}
            {/* <AboutUsArea /> */}
            {/* about area */}
            <StickySlider/>
            
             <FunFactOne />
            {/* <StickySliderLeft/> */}
            {/* <ServiceHero/> */}
            {/* team area */}
            <TeamOne spacing="" />
            {/* team area */}

            {/* fun fact area */}
           
            {/* fun fact area */}

            {/* brand area */}
            {/* <BrandFive /> */}
            {/* brand area */}

            {/* award area */}
            {/* <AwardOne cls="ab-award-style pt-120 pb-120" abStyle={true} /> */}
            {/* award area */}
          </main>

          {/* footer area */}
          <FooterOne/>
          {/* <FooterTwo topCls="" /> */}
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUsMain;
