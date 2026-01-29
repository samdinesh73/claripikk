import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";

import Link from "next/link";
import ReactCompareImage from "react-compare-image";
import { before } from "node:test";
const images =[
    {
        
    },
    {
        after:"/assets/img/ba/after1.png",
        before:"/assets/img/ba/before1.png",
    },
    {
        after:"/assets/img/ba/after1.png",
        before:"/assets/img/ba/before1.png",
    },
    {
        after:"/assets/img/ba/after1.png",
        before:"/assets/img/ba/before1.png",
    },
]
const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Image Editing",
    title: "Product & Commercial Image Editing",
    text: "Professional image editing for product photos and commercial use focused on clarity, consistency, and maximum visual impact.",
    lists: [
      "Background Removal",
      "Clipping Path Services",
      "Product Image Retouching",
      "Color Correction & Enhancement",
      "Shadow Creation (Natural / Drop / Reflection)",
      "Ghost Mannequin Editing",
      "Image Silhouetting",
      "Image Cropping & Resizing",
      "Product Image Optimization for Marketplaces",
    ],
    after:"/assets/img/ba/after1.png",
        before:"/assets/img/ba/before1.png",
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Image Editing",
    title: "Industry-Specific Image Editing",
    text: "Specialized image editing services tailored for specific industries including jewelry, fashion, and real estate photography.",
    lists: [
      "Jewelry Image Retouching",
      "Fashion & Apparel Image Editing",
      "Real Estate Image Enhancement",
    ],
    after:"/assets/img/ba/after1.png",
        before:"/assets/img/ba/before1.png",
  },
];

export default function ImageAfterBefore() {
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
                        <ReactCompareImage  leftImage={item.before} rightImage={item.after} handleSize={60} />
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
