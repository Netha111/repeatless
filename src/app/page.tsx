
import HeroSection from "./components/AUtomation";

import CaseStudies from "./components/casestudies";
import CTASection from "./components/CTASection";
import Hero from "./components/Hero"; // Updated import path
import OfferBanner from "./components/OfferBanner";
// import FeaturesSection from "./components/Scroll";
// import AutomationSection from "./components/shero";
import SolutionsSection from "./components/Solutions";
import TestimonialsSection from "./components/Testimonials";
import VideoSection from "./components/Video";
export default function Home() {
  return (
    <main className="relative"> 
      <Hero />

     
      <SolutionsSection/>
      <VideoSection/>
      <HeroSection/>
      <CaseStudies/>
      <TestimonialsSection/>
      <CTASection/>
      <OfferBanner/>
      
    </main>
  );
}
