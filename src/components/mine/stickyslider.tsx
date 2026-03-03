import React from "react";
import Image from "next/image";

import product_data from "@/data/product-data";
import prd_banner from "@/assets/claripik/about.png";
import { IProductDT } from "@/types/product-d-t";

import Link from "next/link";

export default function StickySlider() {
  const other_products = [...product_data].slice(0, 6);
  const [productItem, setProductItem] = React.useState<IProductDT | null>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  function handleProductModal(product: IProductDT) {
    setModalOpen(true);
    setProductItem(product);
  }
  return (
    <>
      <div className="tp-shop-area pb-90">
        <div className="container-fluid">
          <div className="tp-shop-top-text-wrap">
            <div className="row">
              {/* <div className="col-6">
                <div className="tp-shop-top-text">
                  <span>Trending Products</span>
                </div>
              </div> */}
              {/* <div className="col-6">
                <div className="tp-shop-top-text text-end">
                  <span>
                    <Link href="/">View all</Link>
                  </span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="tp-shop-left-thumb mb-30">
                <Image
                  className="w-100"
                  src={prd_banner}
                  alt="product-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="tp-shop-right">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                   <h2 className="">Your Trusted Creative Partner</h2>
<p>With 15+ years of experience and a strong track record of client satisfaction, Claripik stands as a reliable partner for professional visual and digital services. We specialize in image editing, graphic designing, vector conversion, signage design, and web development, helping businesses present their brand with clarity and confidence.
  </p><p>
Over the years, we have worked with clients from multiple industries including textile, embroidery, e-commerce, printing, corporate, advertising, and product-based businesses. Our experience allows us to understand client needs quickly and deliver clean, accurate, and professional results.
</p><p>
We believe that strong visuals create strong brands, and our goal is to provide high-quality creative solutions that help businesses grow.
</p>
{/* <div className="mb-30" style={{display:'flex',gap:'24px'}}>
  <div className="flex-shrink-0" style={{width:'50%'}}><Image
                    className="w-100"
                    src={prd_banner}
                    alt="product-img"
                    style={{ height: "auto" }}
                  />
  </div>
  <div className="flex-shrink-0" style={{width:'50%'}}><Image
                    className="w-100"
                    src={prd_banner}
                    alt="product-img"
                    style={{ height: "auto" }}
                  />
  </div>
</div> */}

                   <h2 className="">Consistent Client Satisfaction
</h2>
<p>Client satisfaction has always been our biggest strength. With more than 15 years of experience, we have built long-term relationships with our clients by providing reliable service and professional quality work.
</p>
<div className="feature-box">
  {/* <span className="feature-check">✔</span> */}
  <h5>Professional service delivery</h5>
</div>
<div className="feature-box">
  {/* <span className="feature-check">✔</span> */}
  <h5>Clean and precise output</h5>
</div>
<div className="feature-box">
  {/* <span className="feature-check">✔</span> */}
  <h5>On-time project completion</h5>
</div>
<div className="feature-box">
  {/* <span className="feature-check">✔</span> */}
  <h5>Friendly and reliable communication</h5>
</div>
<div className="feature-box">
  {/* <span className="feature-check">✔</span> */}
  <h5>Experience in multiple industries</h5>
</div>
<div className="feature-box">
  {/* <span className="feature-check">✔</span> */}
  <h5>Trusted by repeat clients</h5>
</div>
<p>
Our commitment to quality and consistency has helped us earn positive feedback, repeat projects, and long-term partnerships with clients around the world.

</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* product modal */}
      {/* {productItem && (
        <ProductModal
          showModal={modalOpen}
          setShowModal={setModalOpen}
          productItem={productItem}
          setProductItem={setProductItem}
        />
      )} */}
      {/* product modal */}
      <style jsx>{`
        .feature-box {
          background: #fafafa;
          border: 1px solid #f1f1f1;
          padding: 25px 20px;
          margin-bottom: 30px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          width: 50%;
          justify-content: center;
          box-sizing: border-box;
        }
        /* optional check icon styling if needed
        .feature-check {
          margin-right: 8px;
          font-size: 18px;
        }
        */
        @media (max-width: 768px) {
          .feature-box {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}
