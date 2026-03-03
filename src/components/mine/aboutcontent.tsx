'use client';
import React, { CSSProperties } from 'react';
import Image from 'next/image';
// images
import ab_1 from '@/assets/img/home-02/about/ab-1.jpg';
import ab_2 from '@/assets/img/home-02/about/ab-2.jpg';
import ab_3 from '@/assets/img/home-02/about/ab-s.jpg';

// img style
const imgStyle:CSSProperties = {height: "auto"};
const AboutContent = () => {

  return (
    <div className="tp-about-2-area pt-125 pb-200">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-8 col-xl-10">
            <div className="tp-about-2-title-box tp-btn-trigger tp-btn-bounce mb-70 text-start text-xl-center">
              <h2 className="tp-about-2-section-title">
              We are Claripik, We Create Design & Digital Solutions
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-6 col-md-6 order-1 order-xl-0">
            <div className="tp-about-2-thumb-box p-relative">
              <div className="tp-about-2-thumb-main">
                <Image src={ab_1} alt="ab-img" style={imgStyle} />
              </div>
              <div className="tp-about-2-thumb-inner">
                <Image src={ab_2} alt="ab-img" style={imgStyle} />
                {/* <span className="tp-about-2-thumb-text">I’M A SUNGLASSES INFLUENCER</span> */}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12 order-0 order-xl-1">
            <div className="tp-about-2-content">
              {/* <span>We are Claripik, We Create Design & Digital Solutions</span> */}
              <p className="mb-30">
                Claripik provides high-quality services including image editing, graphic design, vector conversion, signage design, and website development. We work with clients from textile, embroidery, e-commerce, printing, corporate, and advertising industries, delivering accurate and professional results for every project.
We focus on quality, speed, and customer satisfaction. Every design we create is made with attention to detail, ensuring that our clients get the best visual output for their business.
</p>
              <p className="mb-0">
                We focus on quality, speed, and customer satisfaction. Every design we create is made with attention to detail, 
                ensuring that our clients get the best visual output for their business.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutContent;