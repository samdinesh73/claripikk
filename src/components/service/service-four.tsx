import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

const service_data = [
  {
    id: 1,
    title: "Graphic Designing",
    desc: "Creative design solutions to build strong brand identity and impactful marketing materials. <br> Starting at $3 / hour",
    category: ["Logo Design", "Branding", "Social Media Design"],
    icon: s_2,
  },
  {
    id: 2,
    title: "Image Editing",
    desc: "Professional image editing services focused on clarity, consistency, and visual quality. <br> Starting at $0.10 / image",
    category: ["Background Removal", "Product Retouching", "Color Correction"],
    icon: s_1,
  },
  {
    id: 3,
    title: "Vector Graphics",
    desc: "Accurate vector artwork and production-ready files for print and manufacturing. <br> Starting at $3 / hour",
    category: ["Logo Vectorization", "Vector Conversion", "Print Files"],
    icon: s_3,
  },
  {
    id: 4,
    title: "Signage Design",
    desc: "High-impact signage and large-format designs for indoor and outdoor use. <br> Starting at $5 / hour",
    category: ["Banner Design", "Vehicle Wraps", "Billboard Design"],
    icon: s_2,
  },
  {
    id: 5,
    title: "Web Designing",
    desc: "Modern, responsive website designs focused on usability and performance. <br> Starting at $150 / project",
    category: ["Responsive Design", "UI/UX Design", "eCommerce Solutions"],
    icon: s_1,
  },
];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              {/* <div className="tp-service-3-icon">
                <Image src={icon} alt="icon" />
              </div> */}
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Our approach
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
                Creative development studio
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  {/* <div className="tp-service-4-icon mb-30">
                                <Image src={item.icon} alt="icon" />
                              </div> */}
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  <div className="tp-service-3-category">
                    {item.category.map((c, i) => (
                      <span key={i}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end d-none d-lg-block">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
