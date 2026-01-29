import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";
import ServiceTab from "../../mine/ServiceTab";
import ServiceSix from "../service-six";
import GraphicAfterBefore from "../../mine/beforeafterdetail/graphic";
import ImageAfterBefore from "@/components/mine/beforeafterdetail/imageediting";

export default function ImageDetailsArea() {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                Creative Services
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                Image Editing
              </h4>
              <p className="service-details__price tp-char-animation">
                Starting at $0.10 / image
              </p>
            </div>
          </div>
          {/* <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  Branding is essential to establish yourself in the market
                  <br /> in a unique and permanent way. At Riveal, we attach{" "}
                  <br /> great importance. We seek to understand your business
                  to better convey your values ​​and your talent <br /> through
                  your brand image.{" "}
                </p>
                <p className="tp_title_anim">
                  Explore our achievements and let yourself be <br /> convinced!
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="mb-30">
 <ImageAfterBefore />
      </div>
     
      <div className="container">
        <div className="row">
          
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                <p className="text-1 tp_title_anim">
                  Professional image editing services focused on clarity, consistency, and visual quality.
                </p>
                <p>
                  We deliver comprehensive image editing solutions including product retouching, background removal, color correction, and industry-specific enhancements tailored to your needs.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  <li>Product & Commercial Image Editing</li>
                  <li>Background Removal & Clipping Path</li>
                  <li>Product Image Retouching</li>
                  <li>Color Correction & Enhancement</li>
                  <li>Shadow Creation (Natural / Drop / Reflection)</li>
                  <li>Ghost Mannequin Editing</li>
                  <li>Image Silhouetting & Cropping</li>
                  <li>Product Image Optimization for Marketplaces</li>
                  <li>Industry-Specific Image Editing</li>
                  <li>Jewelry Image Retouching</li>
                  <li>Fashion & Apparel Image Editing</li>
                  <li>Real Estate Image Enhancement</li>
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_2}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                    <div className="service-details__sm-thumb">
                      <Image
                        src={sv_3}
                        alt="service-img"
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-details__left-text">
                <p>
                  Whether you need product photography enhancement, e-commerce marketplace optimization, or industry-specific editing, we deliver professional results with attention to detail and fast turnaround times.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                <a href="#">Product Editing</a>
                <a className="active" href="#">
                  Background Removal
                </a>
                <a href="#">Color Correction</a>
                <a href="#">Jewelry Editing</a>
                <a href="#">Real Estate</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  Image <br /> Editing
                </h4>
                <p className="mb-20">
                  Professional image editing starting at just $0.10 per image. We enhance and optimize your photos for maximum impact and marketplace success.
                </p>
                <Link
                  className="tp-btn-white background-black"
                  href="/contact"
                >
                  Let’s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
