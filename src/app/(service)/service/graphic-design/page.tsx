import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";
import GraphicDetailsMain from "@/pages/service/graphicDesign";


export const metadata: Metadata = {
  title: "Claripik- Graphic Design Details page",
};

const GraphicDetailsPage = () => {
  return (
    <GraphicDetailsMain/>
  );
};

export default GraphicDetailsPage;
