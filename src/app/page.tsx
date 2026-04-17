import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";


export default function Home() {
  return (
  <section className="relative w-full h-screen">
        <Navbar/>
        
          
        <HeroSection/>
      <h1>Featured</h1>
        <h1>Footer</h1>
  </section>
  );
}
