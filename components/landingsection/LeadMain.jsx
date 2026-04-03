// src/pages/Home.jsx
// import Hero from "./Hero";               
// import WhyChooseUs from "./WhyChooseUs";        
// import GallerySection from "./GallerySection";
// import SpacesGrid from "./SpacesGrid";
// import SolutionsSlider from "./SolutionsSlider";
// import ProcessSection from "./ProcessSection";
// import ChennaiProjects from "./ChennaiProjects";
import ChennaiProjects from "./ChennaiProjects";
import FAQAccordion from "./FAQAccordion";
import FloatingActions from "./FloatingActions";
import FooterCTA from "./FooterCTA";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import ProcessSection from "./ProcessSection";
import SolutionsSlider from "./SolutionsSlider";
import SpacesGrid from "./SpacesGrid";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUs from "./WhyChooseUs";
// import TestimonialsSection from "./TestimonialsSection";
// import FAQAccordion from "./FAQAccordion";
// import FooterCTA from "./FooterCTA";
// import CursorTrail from "../CursorTrail";

export default function LeadMain() {
  return (
    
    <main>
       {/* <CursorTrail/> */}
       <FloatingActions />
      <Hero />
       <WhyChooseUs />
      <GallerySection />
      <SpacesGrid />
      <SolutionsSlider />
      <ProcessSection />   
      <ChennaiProjects />
      <TestimonialsSection />
      <FAQAccordion />
      <FooterCTA />
    </main>
  );
}
