import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import Hero from "../components/landing/Hero";
import TechStack from "../components/landing/TechStack";
import Features from "../components/landing/Features";
import Workflow from "../components/landing/Workflow";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA"; 
import Footer from "../components/landing/Footer";
export default function Landing() {
  return (
    <div>

      <Background />

      <Navbar />

      <Hero />

      <TechStack />

      <Features />
      <Workflow />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}