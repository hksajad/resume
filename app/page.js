import Footer from "@/components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "@/components/template/HeroPage/Hero";
import AboutUs from "@/components/template/AboutUs/AboutUs";
import ResumePage from "@/components/template/ResumePage/ResumePage";
import SkillsWork from "../components/template/SkillsWork/SkillsWork";
import Contact from "@/components/template/Contact/Contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero/>
      <AboutUs/>
      <ResumePage/>
      <SkillsWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}
