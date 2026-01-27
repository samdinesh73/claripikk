import React from "react";
import { Leaf } from "../svg";
import Image from "next/image";
// service icon
import ser_1 from "@/assets/img/home-02/service/sv-icon-1.png";
import ser_2 from "@/assets/img/home-02/service/sv-icon-2.png";
import ser_3 from "@/assets/img/home-02/service/sv-icon-3.png";
import ser_4 from "@/assets/img/home-02/service/sv-icon-4.png";
// shape
import shape from "@/assets/img/home-02/service/sv-shape-1.png";

const service_accordion = [
  {
    id: 1,
    icon: ser_1,
    title: "Share Your Images",
    desc: "Upload your images and mention your editing requirements clearly.",
  },
  {
    id: 2,
    icon: ser_2,
    title: "Editing Process",
    desc: "Our expert editors manually enhance your images with attention to detail and quality standards.",
  },
  {
    id: 3,
    icon: ser_3,
    title: "Quality Check",
    desc: " Each image goes through a strict quality review to ensure accuracy and consistency.",
  },
  {
    id: 4,
    icon: ser_4,
    title: "Review & Revisions",
    desc: "You can review the edited images and request revisions if needed.",
  },
  {
    id: 5,
    icon: ser_4,
    title: "Final Delivery",
    desc: "Once approved, the final images are delivered in your preferred format.",
  },
];
export default function WorkFlow() {
  return (
    <div className="tp-service-2-area tp-service-2-pt  pb-150 z-index-5">
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div className="tp-service-2-title-box mb-70">
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Our Quality -<br /> <span>Driven Workflow </span>
                </h4>
              </div>
              {/* <h4 className="tp-section-title-40">
                Strategy, design and implementation as an effective complete
                solution. Your authentic website as a digital customer magnet.
              </h4> */}
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-4 col-lg-4">
            <div className="tp-service-2-shape-img text-center text-lg-start">
              <Image src={shape} alt="" />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-8 col-lg-8">
            <div className="tp-service-2-accordion-box">
              <div className="accordion" id="accordionExample">
                {service_accordion.map((s) => (
                  <div key={s.id} className="accordion-items">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-buttons ${s.id !== 1 ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${s.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse-${s.id}`}
                      >
                        <span>
                          <Image src={s.icon} alt="icon" />
                        </span>
                        {s.title}
                        <span className="accordion-icon"></span>
                      </button>
                    </h2>
                    <div
                      id={`collapse-${s.id}`}
                      className={`accordion-collapse collapse ${s.id === 1 ? "show" : ""}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
