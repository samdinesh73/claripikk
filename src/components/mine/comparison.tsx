"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./beforeafterslider.css";
import ReactCompareImage from "react-compare-image";

const project_data = [
  {
    id: 1,
    bimg: "/assets/claripik/website/1.png",
    aimg:"/assets/claripik/website/2.png",
    aclass:"before1",
    subtitle: "service",
    title: "Brand 1",
  },
  {
    id: 2,
   bimg: "/assets/claripik/website/3.png",
    aimg:"/assets/claripik/website/4.png",
    aclass:"before2",
    subtitle: "service",
    title: "Brand 2",
  },
  {
    id: 3,
    bimg: "/assets/claripik/website/5.png",
    aimg:"/assets/claripik/website/6.png",
    aclass:"before3",
    subtitle: "service",
    title: "Brand 3",
  },
  {
    id: 4,
   bimg: "/assets/claripik/website/7.png",
    aimg:"/assets/claripik/website/8.png",
    aclass:"before4",
    subtitle: "service",
    title: "Brand 4",
  },
  // {
  //   id: 5,
  //   bimg: "/assets/img/home-02/project/project-5.jpg",
  //   aimg: "/assets/img/home-02/project/project-6.jpg",
  //   aclass:"before5",
  //   subtitle: "service",
  //   title: "Brand 5",
  // },
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
 
     return (
    <section className="tp-project-2-area tpproject">
      <div className="panels p-relative fix">
        <div className="panels-container d-flex">
          {project_data.map((item) => (
            <div key={item.id} className="panel">
              <div className="tp-project-2-item p-relative">
                <div 
                  className="tp-project-2-thumb comparisonslider"
                 
                >
                  {/* After (bottom) */}
                  <ReactCompareImage  leftImage={item.bimg} rightImage={item.aimg} handleSize={60} />
                 
                  {/* Before (top clipped) */}
                  
                  
                </div>
                  
                  <h3 className="text-center mt-20 text-4xl">{item.title}</h3>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );



}

