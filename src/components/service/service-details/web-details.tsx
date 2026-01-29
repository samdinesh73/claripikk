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
                Graphic Designing
              </h4>
              <p className="service-details__price tp-char-animation">
                Starting at $3 / hour
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
                  Creative design solutions to build strong brand identity and impactful marketing materials.
                </p>
                <p>
                  We deliver comprehensive graphic design services that encompass everything from logo creation to packaging design, ensuring your brand stands out across all platforms.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  <li>Branding & Marketing Design</li>
                  <li>Logo Design & Brand Identity</li>
                  <li>Brand Guidelines</li>
                  <li>Company Profiles & Corporate Brochures</li>
                  <li>Pitch Decks & Presentations</li>
                  <li>Print & Marketing Collateral</li>
                  <li>Brochures, Flyers & Posters</li>
                  <li>Business Cards & Stationery</li>
                  <li>Catalogs & Lookbooks</li>
                  <li>Digital & Social Media Design</li>
                  <li>Social Media Creatives</li>
                  <li>Ad Banners & Campaign Creatives</li>
                  <li>Packaging & Product Design</li>
                  <li>Product Packaging, Labels & Box Design</li>
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
                  From branding and marketing design to packaging and social media creatives, we provide end-to-end graphic design solutions tailored to your business needs and budget requirements.
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
                <a href="#">Branding</a>
                <a className="active" href="#">
                  Logo Design
                </a>
                <a href="#">Print Design</a>
                <a href="#">Social Media</a>
                <a href="#">Packaging</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  Graphic <br /> Designing
                </h4>
                <p className="mb-20">
                  Professional graphic design starting at $3 per hour. We create compelling visual solutions that strengthen your brand identity and drive engagement.
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
