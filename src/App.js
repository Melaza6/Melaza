import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import ServicesSection from "./components/sections/ServicesSection";
import ProcessSection from "./components/sections/ProcessSection";
import SolutionsSection from "./components/sections/SolutionsSection";
import PackagesSection from "./components/sections/PackagesSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import AdminLinkSection from "./components/sections/AdminLinkSection";

export default function App() {
  return (
    <div id="home" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <SolutionsSection />
        <PackagesSection />
        <AboutSection />
        <ContactSection />
        <AdminLinkSection />
      </main>
      <Footer />
    </div>
  );
}
