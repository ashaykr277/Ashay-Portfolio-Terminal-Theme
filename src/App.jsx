// import './Main.css'
import { useEffect } from 'react'
import Lenis from "@studio-freight/lenis";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects';
import Contact from './components/Contact';
// import ScrambledText from '../ReactBits/ScrambledText';
// import DotGrid from '../ReactBits/DotGrid';
// import LetterGlitch from '../ReactBits/LetterGlitch';
// import AnimatedContent from '../ReactBits/AnimatedContent'
import ScrollFloat from '../ReactBits/ScrollFloat';


function App() {

    useEffect(() => {
    window.history.scrollRestoration = "manual";

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => t * (2 - t),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div> */}
      <Section />
      <About />
      <Education />
      <Projects />
      <Contact />

      <Footer />



    </>
  )
} 3
export default App


