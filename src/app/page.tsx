import HeroSection from "@/components/sections/HeroSection";
import FeaturedWines from "@/components/sections/FeaturedWines";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
  <section className="relative w-full h-screen">
        <Navbar/>
        
          
        <HeroSection/>
        <FeaturedWines/>
        <h1>Footer</h1>
  </section>
  );
}
