// import './Main.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Section from './components/Section'
import About from './components/About'
import Education from './components/Education'
// import ScrambledText from '../ReactBits/ScrambledText';
// import DotGrid from '../ReactBits/DotGrid';
// import LetterGlitch from '../ReactBits/LetterGlitch';
// import AnimatedContent from '../ReactBits/AnimatedContent'
import ScrollFloat from '../ReactBits/ScrollFloat';


function App() {
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
      <Footer />



    </>
  )
} 3
export default App
