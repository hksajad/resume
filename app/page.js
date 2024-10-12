import Footer from "@/components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "@/components/template/HeroPage/Hero";
import AboutUs from "@/components/template/AboutUs/AboutUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
