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
import ServiceFive, { ServiceItems } from "@/components/service/service-five";
import ServiceHero from "@/components/service/service-hero";
import ServiceSix from "@/components/service/service-six";
import { BrandItems } from "@/components/brand/brand-two";
import LineImgSlider from "@/components/line-text/line-img-slider";
import BigText from "@/components/big-text";
import { Leaf } from "@/components/svg";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, fadeAnimation } from "@/utils/title-animation";
import { servicePanel } from "@/utils/panel-animation";
import ServiceOne from "@/components/service/service-one";
import ServiceTwo from "@/components/service/service-two";
import ServiceThree from "@/components/service/service-three";
import ServiceFour from "@/components/service/service-four";
import HeroBannerSix from "@/components/hero-banner/hero-banner-six";
import HeaderOne from "@/layouts/headers/header-one";
import VideoTwo from "@/components/video/video-two";
import { videoAnimTwo } from "@/utils/video-anim";
import CharSlider from "@/components/mine/charslider";
import { heroScrollTextAnim } from "@/utils/scroll-marque";
import StudioPanelFive from "@/components/studio-panels/studio-panel-5";
import FooterText from "@/components/mine/footertext";
import FunFactOne from "@/components/fun-fact/fun-fact-one";

const ServiceMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
       videoAnimTwo();
       
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
            {/* service hero */}
            {/* <ServiceHero /> */}
            {/* service hero */}
{/* <HeroBannerSix /> */}
<div style={{marginBottom:50,marginTop:100}} className="sm:mt-10" >
  <VideoTwo />
</div>
  
            {/* service area */}
            {/* <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <span className="ab-inner-subtitle mb-20">
                        <Leaf />
                        Services
                      </span>
                      <h4 className="tp-service-5-title">
                        We strongly believe that only design reinforced by{" "}
                        <br />
                        strategy can provide real results.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="tp-service-5-wrap">
                  <ServiceItems />
                </div>
              </div>
            </div> */}
            {/* service area */}

            {/* service area */}
            
            <ServiceFour/>
         
            <FunFactOne/>
            {/* service area */}

            {/* brand area */}
            <div className="tp-brand-4-area pt-120 pb-120">
              <div className="container">
                <div className="row gx-0">
                  <BrandItems />
                </div>
              </div>
            </div>
            {/* brand area */}

            {/* line image slider  */}
            <LineImgSlider />
            {/* line image slider  */}

            {/* big text */}
            <BigText />
            
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceMain;
