import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import GraphicDetailsMain from "@/pages/service/graphicDesign";
import VectorDetailsMain from "@/pages/service/vectorDesign";
import ImageDetailsMain from "@/pages/service/imageEditing";


export const metadata: Metadata = {
  title: "Claripik- Graphic Design Details page",
};

const ImageDetailsPage = () => {
  return (
    <ImageDetailsMain/>
  );
};

export default ImageDetailsPage;