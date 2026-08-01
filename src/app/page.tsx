import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // <-- Import Footer
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Ecosystem from "@/components/sections/Ecosystem";
import Comparison from "@/components/sections/Comparison";
import InsideProduct from "@/components/sections/InsideProduct";
import Industries from "@/components/sections/Industries";
import Stats from "@/components/sections/Stats";
import CustomerSuccess from "@/components/sections/CustomerSuccess";
import Integrations from "@/components/sections/Integrations";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FooterCTA from "@/components/sections/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <Ecosystem />
        <Comparison />
        <InsideProduct />
        <Industries />
        <Stats />
        <CustomerSuccess />
        <Integrations />
        <Pricing />
        <FAQ />
        <FooterCTA />
      </main>
      <Footer /> {/* <-- Render Footer */}
    </>
  );
}