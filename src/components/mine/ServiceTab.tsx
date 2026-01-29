import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";
import ReactCompareImage from "react-compare-image";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Graphic Design",
    title: "Branding & Marketing Design",
    text: "Strategic brand identity and marketing design solutions to establish strong visual presence and capture audience attention.",
    lists: [
      "Logo Design & Brand Identity",
      "Brand Guidelines",
      "Company Profiles",
      "Corporate Brochures",
      "Pitch Decks & Presentations",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Graphic Design",
    title: "Print & Marketing Collateral",
    text: "Comprehensive print and marketing materials designed to elevate your brand presence across all physical touchpoints.",
    lists: [
      "Brochures, Flyers & Posters",
      "Business Cards & Stationery",
      "Catalogs & Lookbooks",
      "Menus (Restaurants & Cafes)",
      "Certificates & Reports",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Graphic Design",
    title: "Digital & Social Media Design",
    text: "Engaging digital and social media designs crafted to maximize reach and drive conversions across all platforms.",
    lists: [
      "Social Media Creatives",
      "Ad Banners & Campaign Creatives",
      "Email Marketing Creatives",
      "Promotional Graphics",
      "Google & Meta Ad Creatives",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Graphic Design",
    title: "Packaging & Product Design",
    text: "Premium packaging and product design solutions that enhance shelf appeal and create memorable brand experiences.",
    lists: [
      "Product Packaging Design",
      "Labels & Box Design",
      "Retail Packaging Artwork",
    ],
  },
];

export default function ServiceTab() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  {/* <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  /> */}
                  <div style={{height:"auto"}}>
                        <ReactCompareImage  leftImage="/assets/img/ba/before1.png" rightImage="/assets/img/ba/after1.png" handleSize={60} />
                  </div>
                 
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      {/* <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
