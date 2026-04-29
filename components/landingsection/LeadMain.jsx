import BottomCenterButton from "./BottomCenterButton";
import ChennaiProjects from "./ChennaiProjects";
import FAQAccordion from "./FAQAccordion";
import FloatingActions from "./FloatingActions";
import FooterCTA from "./FooterCTA";
import GallerySection from "./GallerySection";
import Hero from "./Hero";
import LeadPopup from "./LeadPopup";
import ProcessSection from "./ProcessSection";
import SolutionsSlider from "./SolutionsSlider";
import TestimonialsSection from "./TestimonialsSection";

export default function LeadMain() {
  return (
    <div className="landing-font">
      <FloatingActions />
      <LeadPopup />
      <Hero />
      <ChennaiProjects />
      <TestimonialsSection />
      <SolutionsSlider />
      <ProcessSection />
      <GallerySection />
      <FAQAccordion />
      <FooterCTA />
      <BottomCenterButton />
    </div>
  );
}
