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
import SignageAfterBefore from "@/components/mine/beforeafterdetail/signage";

export default function SignageDetailsArea() {
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
                Signage Design
              </h4>
              <p className="service-details__price tp-char-animation">
                Starting at $5 / hour
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
 <SignageAfterBefore />
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
                  High-impact signage and large-format designs for indoor and outdoor use that capture attention and communicate your message effectively.
                </p>
                <p>
                  We deliver comprehensive signage solutions including banner design, vehicle wraps, billboards, and exhibition graphics tailored to maximize visibility and impact.
                </p>
              </div>
              <div className="service-details__fea-list">
                <ul>
                  <li>Indoor & Outdoor Signage</li>
                  <li>Banner Design</li>
                  <li>Poster Design</li>
                  <li>Storefront Signage</li>
                  <li>Window Graphics</li>
                  <li>Wayfinding Signage</li>
                  <li>Large Format & Commercial Graphics</li>
                  <li>Vehicle Wrap Design</li>
                  <li>Hoardings & Billboards</li>
                  <li>Trade Show Displays</li>
                  <li>Exhibition Booth Graphics</li>
                  <li>Standees & Backdrops</li>
                  <li>Event Signage & Branding</li>
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
                  Whether you need storefront signage, vehicle wraps, exhibition displays, or large-format billboards, we create eye-catching designs that deliver results and strengthen your brand presence in physical spaces.
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
                <a href="#">Banner Design</a>
                <a className="active" href="#">
                  Vehicle Wraps
                </a>
                <a href="#">Billboards</a>
                <a href="#">Exhibition</a>
                <a href="#">Wayfinding</a>
              </div>
              <div className="service-details__right-text-box">
                <h4>
                  Signage <br /> Design
                </h4>
                <p className="mb-20">
                  Professional signage design starting at $5 per hour. We create impactful large-format designs that command attention and communicate your message effectively.
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
