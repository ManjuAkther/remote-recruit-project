
import Hero from './components/Hero';
import Features from './components/Features';

import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CTA from './components/CTA';
export default function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased scroll-smooth">
    
      <Hero />
    
      <Features />
      <CTA></CTA>
     
      <Pricing />
      <FAQ />
      <Footer />
      <ScrollTop />
      
    </div>
  );
}



// import Home from "./pages/Home";


// function App() {
//   return<Home></Home>;
  
// }

// export default App;