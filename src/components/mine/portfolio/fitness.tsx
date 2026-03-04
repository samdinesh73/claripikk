import React from "react";
import Image from "next/image";
import { Share } from "../../svg";
import Link from "next/link";
// images
import port_1 from "@/assets/claripik/Fitness Industry/1.png";
import port_2 from "@/assets/claripik/Fitness Industry/2.png";
import port_3 from "@/assets/claripik/Fitness Industry/3.png";
import port_4 from "@/assets/claripik/Fitness Industry/4.png";
import port_5 from "@/assets/claripik/ecommerce industry/5.png";
import port_6 from "@/assets/claripik/ecommerce industry/6.jpg";
import ReactCompareImage from "react-compare-image";

// import port_1 from "@/assets/img/home-09/slider/slider-1.jpg";
// import port_2 from "@/assets/img/home-09/slider/slider-2.jpg";
// import port_3 from "@/assets/img/home-09/slider/slider-3.jpg";
// import port_4 from "@/assets/img/home-09/slider/slider-4.jpg";
// import port_5 from "@/assets/img/home-09/slider/slider-5.jpg";
const project_data = [
  {
    id: 1,
    bimg: "/assets/claripik/Fitness Industry/1.png",
    aimg:"/assets/claripik/Fitness Industry/2.png",
    aclass:"before1",
    subtitle: "service",
    title: "Brand 1",
  },
  {
    id: 2,
   bimg: "/assets/claripik/Fitness Industry/3.png",
    aimg:"/assets/claripik/Fitness Industry/4.png",
    aclass:"before2",
    subtitle: "service",
    title: "Brand 2",
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
const project_data1 = [
   {
    id: 1,
    bimg: "/assets/claripik/Fitness Industry/3.png",
    aimg:"/assets/claripik/Fitness Industry/4.png",
    aclass:"before1",
    subtitle: "service",
    title: "Brand 1",
  },
  {
    id: 2,
   bimg: "/assets/claripik/Fitness Industry/1.png",
    aimg:"/assets/claripik/Fitness Industry/2.png",
    aclass:"before2",
    subtitle: "service",
    title: "Brand 2",
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
const portfolio_data = [
  {
    id: 1,
    // title: "Brand 1",
    // category: "Service",
    bimg: port_1,
    aimg:port_2,
  },
  {
    id: 2,
    // title: "Brand 2",
    // category: "Service",
    bimg: port_3,
    aimg:port_4,
  },
  {
    id: 3,
    // title: "Brand 3",
    // category: "Service",
    bimg: port_5,
    aimg:port_6,
  },
//   {
//     id: 4,
//     // title: "Brand 4",
//     // category: "Service",
//      bimg: port_1,
//     aimg:port_2,
//   },
//   {
//     id: 5,
//     // title: "Brand 5",
//     // category: "Service",
//     image: port_5,
//   },
];
export default function FitnessPortfolioSlider() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <React.Fragment>
      <div className="tp-portfolio-9-area">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-perspective-slider">
                {project_data.map((item) => (
                  <div key={item.id} className="tp-slide">
                    <div className="tp-slide-inner">
                        
                      <div
                        className="tp-image"
                        // data-background="assets/img/home-09/slider/slider-1.jpg"
                        // style={{ backgroundImage: `url(${item.aimg.src})` }}
                      >
                        
                        <ReactCompareImage  leftImage={item.bimg} rightImage={item.aimg} handleSize={60} />
                       
                        {/* <div className="tp-slider-content">
                          <span className="tp-portfolio-9-category tp_reveal_anim">
                            {item.category}
                          </span>
                          <h1
                            className="tp-portfolio-9-title tp_reveal_anim not-hide-cursor"
                            data-cursor="View<br>Service"
                          >
                            <Link
                              className="cursor-hide"
                              // href="/portfolio-showcase-details-2" 
                              href="#"
                            >
                              {item.title}
                            </Link>
                          </h1>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>     
            </div>
            <div className="col-xl-6">
              <div className="tp-perspective-slider">
                {project_data1.map((item) => (
                  <div key={item.id} className="tp-slide">
                    <div className="tp-slide-inner">
                        
                      <div
                        className="tp-image"
                        // data-background="assets/img/home-09/slider/slider-1.jpg"
                        // style={{ backgroundImage: `url(${item.aimg.src})` }}
                      >
                        
                        <ReactCompareImage  leftImage={item.bimg} rightImage={item.aimg} handleSize={60} />
                       
                        {/* <div className="tp-slider-content">
                          <span className="tp-portfolio-9-category tp_reveal_anim">
                            {item.category}
                          </span>
                          <h1
                            className="tp-portfolio-9-title tp_reveal_anim not-hide-cursor"
                            data-cursor="View<br>Service"
                          >
                            <Link
                              className="cursor-hide"
                              // href="/portfolio-showcase-details-2" 
                              href="#"
                            >
                              {item.title}
                            </Link>
                          </h1>
                        </div> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-portfolio-9-social-wrap">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-social-info">
                <span>
                  Follow Us{" "}
                  <Share />
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-scroll text-end">
                <a onClick={scrollTop} href="#">(Scroll)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
