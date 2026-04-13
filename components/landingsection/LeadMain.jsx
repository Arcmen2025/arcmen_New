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
import StatsSection from "./StatCard";
import TestimonialsSection from "./TestimonialsSection";
import WhyChooseUs from "./WhyChooseUs";

export default function LeadMain() {
  return (
    <div className="landing-font">
      <FloatingActions />
      <LeadPopup />
      <Hero />
      <StatsSection />
      <ChennaiProjects />
      <SolutionsSlider />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQAccordion />
      <FooterCTA />
      <BottomCenterButton />
    </div>
  );
}
