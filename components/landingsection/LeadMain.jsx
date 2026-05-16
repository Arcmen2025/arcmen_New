"use client"
import BottomCenterButton from "./BottomCenterButton";
import ChennaiProjects from "./ChennaiProjects";
import FAQAccordion from "./FAQAccordion";
import FloatingActions from "./FloatingActions";
import FooterCTA from "./FooterCTA";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import LeadPopup from "./LeadPopup";
import OurBrand from "./OurBrandSection";
import ProcessSection from "./ProcessSection";
import SolutionsSlider from "./SolutionsSlider";
import StatsSection from "./StatCard";
import TestimonialsSection from "./TestimonialsSection";
import { useState } from "react";

export default function LeadMain() {
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
  return (
    <div className="landing-font">
      <FloatingActions />
      <LeadPopup />
      <Hero
  isMobileFormOpen={isMobileFormOpen}
  setIsMobileFormOpen={setIsMobileFormOpen}
/> 
<StatsSection />
      <ChennaiProjects
  setIsMobileFormOpen={setIsMobileFormOpen}
/>
      <TestimonialsSection />
      <SolutionsSlider
      setIsMobileFormOpen={setIsMobileFormOpen}
      isMobileFormOpen={isMobileFormOpen}
       />
       
      <OurBrand />
      <ProcessSection />
      <GallerySection />
      <FAQAccordion />
      <FooterCTA setIsMobileFormOpen={setIsMobileFormOpen}/>
      <BottomCenterButton setIsMobileFormOpen={setIsMobileFormOpen}/>
    </div>
  );
}
