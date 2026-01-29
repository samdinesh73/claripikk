import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import GraphicDetailsMain from "@/pages/service/graphicDesign";
import VectorDetailsMain from "@/pages/service/vectorDesign";


export const metadata: Metadata = {
  title: "Claripik- Graphic Design Details page",
};

const VectorDetailsPage = () => {
  return (
    <VectorDetailsMain/>
  );
};

export default VectorDetailsPage;