import React, { useEffect } from "react";
import Link from "next/link";
import { parallaxSlider } from "@/utils/parallax-slider";
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
const slider_data = [
  {
    id: 1,
    subtitle: "branding",
    title: "Brand some",
  },
  {
    id: 2,
    subtitle: "Digital",
    title: "Digital Thinker",
  },
  {
    id: 3,
    subtitle: "Markus",
    title: "Markus Erickson",
  },
  {
    id: 4,
    subtitle: "Emko",
    title: "Emko Furniture",
  },
  {
    id: 5,
    subtitle: "branding",
    title: "Brand some",
  },
  {
    id: 6,
    subtitle: "Craig",
    title: "Craig Reynolds",
  },
  {
    id: 7,
    subtitle: "Green",
    title: "Green Reel",
  },
];

export default function PortfolioSliderHomeTwelve() {
  useEffect(() => {
    const timer = setTimeout(() => {
      parallaxSlider();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="parallax-slider-wrapper">
      <div className="parallax-slider">
        <div className="parallax-slider-inner">
          {project_data.map((item) => (
            <div
              className="parallax-item not-hide-cursor"
              data-cursor="View<br>Demo"
              key={item.id}
            >
              <Link className="cursor-hide" href="/portfolio-showcase-details">
                <div className="parallax-content">
                  <span>{item.subtitle}</span>
                  <h4>{item.title}</h4>
                </div>
                
                <div className="-img"><ReactCompareImage  leftImage={item.bimg} rightImage={item.aimg} handleSize={60} /></div>  
              
                
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
