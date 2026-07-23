import Navbar from "../components/layout/Navbar";
import Background from "../components/layout/Background";
import PricingSection from "../components/landing/pricing/Pricing";
import Footer from "../components/landing/Footer";

export default function Pricing() {
  return (
    <>
      <Background />
      <Navbar />

      <PricingSection />

      <Footer />
    </>
  );
}