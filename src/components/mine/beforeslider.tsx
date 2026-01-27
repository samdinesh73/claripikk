"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./beforeafterslider.css";

const project_data = [
  {
    id: 1,
    bimg: "/assets/img/home-02/project/project-1.jpg",
    aimg:"/assets/img/home-02/project/project-2.jpg",
    aclass:"before1",
    subtitle: "service",
    title: "Brand 1",
  },
  {
    id: 2,
    bimg: "/assets/img/home-02/project/project-2.jpg",
    aimg: "/assets/img/home-02/project/project-3.jpg",
    aclass:"before2",
    subtitle: "service",
    title: "Brand 2",
  },
  {
    id: 3,
    bimg: "/assets/img/home-02/project/project-3.jpg",
    aimg: "/assets/img/home-02/project/project-4.jpg",
    aclass:"before3",
    subtitle: "service",
    title: "Brand 3",
  },
  {
    id: 4,
    bimg: "/assets/img/home-02/project/project-4.jpg",
    aimg: "/assets/img/home-02/project/project-5.jpg",
    aclass:"before4",
    subtitle: "service",
    title: "Brand 4",
  },
  {
    id: 5,
    bimg: "/assets/img/home-02/project/project-5.jpg",
    aimg: "/assets/img/home-02/project/project-6.jpg",
    aclass:"before5",
    subtitle: "service",
    title: "Brand 5",
  },
//   {
//     id: 6,
//     bimg: "/assets/img/home-02/project/project-6.jpg",
//     aimg: "/assets/img/home-02/project/project-7.jpg",
//     subtitle: "service",
//     aclass:"before6",
//     title: "Brand 6",
//   },
//   {
//     id: 7,
//     bimg: "/assets/img/home-02/project/project-7.jpg",
//     aimg: "/assets/img/home-02/project/project-1.jpg",
//     aclass:"before7",
//     subtitle: "service",
//     title: "Brand 7",
//   },
];

export default function BeforeSlider() {
  const [sliderPosition, setSliderPosition] = useState<{ [key: number]: number }>({});
  const [isDown, setIsDown] = useState<{ [key: number]: boolean }>({});
  const containerRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const beforeWrapRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const handleRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleMouseDown = (id: number) => {
    setIsDown((prev) => ({ ...prev, [id]: true }));
  };

  const handleMouseUp = () => {
    setIsDown({});
  };

  const handleMouseMove = (e: React.MouseEvent, id: number) => {
    if (!isDown[id]) return;

    const container = containerRefs.current[id];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let x = e.clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    setSliderPosition((prev) => ({ ...prev, [id]: percent }));
  };

  const handleTouchStart = (id: number) => {
    setIsDown((prev) => ({ ...prev, [id]: true }));
  };

  const handleTouchEnd = () => {
    setIsDown({});
  };

  const handleTouchMove = (e: React.TouchEvent, id: number) => {
    if (!isDown[id]) return;

    const container = containerRefs.current[id];
    if (!container) return;

    const rect = container.getBoundingClientRect();
    let x = e.touches[0].clientX - rect.left;

    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percent = (x / rect.width) * 100;
    setSliderPosition((prev) => ({ ...prev, [id]: percent }));
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);
     return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item p-relative">
                <div 
                  className="tp-project-2-thumb slider"
                  ref={(el) => {
                    if (el) containerRefs.current[item.id] = el;
                  }}
                  onMouseMove={(e) => handleMouseMove(e, item.id)}
                  onTouchMove={(e) => handleTouchMove(e, item.id)}
                >
                  {/* After (bottom) */}
                  <img src={item.bimg} alt="after" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  
                  {/* Before (top clipped) */}
                  <div 
                    className={`before-wrap ${item.aclass}`}
                    ref={(el) => {
                      if (el) beforeWrapRefs.current[item.id] = el;
                    }}
                    style={{ width: `${sliderPosition[item.id] ?? 50}%` }}
                  >
                    {/* <img src={item.aimg} alt="before" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> */}
                  </div>
                  
                  <div className="label before">Before</div>
                  <div className="label after">After</div>
                  
                  <div 
                    className="handle"
                    ref={(el) => {
                      if (el) handleRefs.current[item.id] = el;
                    }}
                    onMouseDown={() => handleMouseDown(item.id)}
                    onTouchStart={() => handleTouchStart(item.id)}
                    style={{ left: `${sliderPosition[item.id] ?? 50}%` }}
                  />
                </div>

                <div className="tp-project-2-content">
                  <span>{item.subtitle}</span>
                  <h4 className="tp-project-2-title-sm">
                    <Link 
                    // href="/portfolio-details-1"
                    href="#"
                    >{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );



}

