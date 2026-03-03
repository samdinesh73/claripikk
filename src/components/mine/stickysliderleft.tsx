import React from "react";
import Image from "next/image";

import product_data from "@/data/product-data";
import prd_banner from "@/assets/img/inner-shop/product/product-1.jpg";
import { IProductDT } from "@/types/product-d-t";

import Link from "next/link";

export default function StickySliderLeft() {
  const other_products = [...product_data].slice(0, 6);
  const [productItem, setProductItem] = React.useState<IProductDT | null>(null);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  function handleProductModal(product: IProductDT) {
    setModalOpen(true);
    setProductItem(product);
  }
  return (
    <>
      <div className="tp-slide-area pb-90">
        <div className="container-fluid">
          <div className="tp-shop-top-text-wrap">
            <div className="row">
              <div className="col-6">
                <div className="tp-shop-top-text">
                  <span>Trending Products</span>
                </div>
              </div>
              <div className="col-6">
                <div className="tp-shop-top-text text-end">
                  <span>
                    <Link href="/shop">View all</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
           
            <div className="col-xl-6">
              <div className="tp-shop-right">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12">
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                    <h5>Lorem ipsum dolor sit amet.</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quis 
                      exercitationem possimus explicabo cupiditate necessitatibus, quod ratione amet corporis magni, unde quo! Non?</p>
                  </div>
                </div>
              </div>
            </div>
             <div className="col-xl-6">
              <div className="tp-slide-left-thumb mb-30">
                <Image
                  className="w-100"
                  src={prd_banner}
                  alt="product-img"
                  style={{ height: "auto" }}
                />
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
    </>
  );
}
