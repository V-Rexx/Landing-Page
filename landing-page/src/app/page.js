'use client';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
export default function Home() {
  return (
      
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="grow flex items-center justify-center px-4 text-center">
          <Hero/>
        </main>
        <Footer/>
      </div>
   
    
  );
}
