import Footer from "@/components/layout/Footer/Footer";
import Navbar from "../components/layout/Navbar/Navbar";
import HeroPage from "@/components/template/HeroPage/HeroPage";

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <HeroPage/>
      <Footer/>
    </div>
  );
}
