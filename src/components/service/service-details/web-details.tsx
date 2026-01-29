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
import WebAfterBefore from "@/components/mine/beforeafterdetail/webdesign";

export default function WebDetailsArea() {
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
                Web Designing
              </h4>
              <p className="service-details__price tp-char-animation">
                Starting at $150 / project
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                {/* <Image
                  data-speed="0.4"
                  src={sv_1}
                  alt="service-img"
                  style={{ height: "auto" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-30">
 <WebAfterBefore />
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
                  Modern, responsive website designs focused on usability and performance that engage users and drive results.
                </p>
                <p>
                  We deliver comprehensive web design solutions including responsive websites, eCommerce stores, and user-centered UI/UX design tailored to your business goals.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  <li>Website Design</li>
                  <li>Responsive Website Design</li>
                  <li>Business Websites</li>
                  <li>Corporate Websites</li>
                  <li>Portfolio Websites</li>
                  <li>eCommerce Solutions</li>
                  <li>eCommerce Store Design</li>
                  <li>Shopify Store Design</li>
                  <li>Product Page UI Design</li>
                  <li>Conversion-Focused Layouts</li>
                  <li>UI / UX Design</li>
                  <li>Landing Page Design</li>
                  <li>User Interface (UI) Design</li>
                  <li>User Experience (UX) Design</li>
                  <li>Website Redesign & Revamp</li>
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
                  Whether you need a responsive business website, a high-converting eCommerce store, or a complete redesign, we create modern websites that deliver results and provide exceptional user experiences.
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
                <a href="#">Responsive Design</a>
                <a className="active" href="#">
                  Website Design
                </a>
                <a href="#">eCommerce</a>
                <a href="#">Landing Pages</a>
                <a href="#">UI/UX Design</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  Web <br /> Designing
                </h4>
                <p className="mb-20">
                  Professional web design starting at $150 per project. We create modern, responsive websites that engage users and drive business results.
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
