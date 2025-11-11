'use client';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import { Vortex } from "./components/ui/vortex";
export default function Home() {
  return (
      // <Vortex containerClassName="min-h-screen flex flex-col flex-grow">
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow flex items-center justify-center px-4 text-center">
          <Hero/>
        </main>
        <Footer/>
      </div>
      // </Vortex>
    
  );
}
