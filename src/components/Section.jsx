import React from 'react'
import '../components/Home.css'
import FuzzyText from '../../ReactBits/FuzzyText'
import DecryptedText from '../../ReactBits/DecryptedText'
import LetterGlitch from '../../ReactBits/LetterGlitch'
import Squares from '../../ReactBits/Squares';
import TextType from '../../ReactBits/TextType'


const Section = () => {
  return (
    <>
      <section id="home-section">
        {/* <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        /> */}

        {/* <Squares
          speed={0.2}
          squareSize={20}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#00000018'
          hoverFillColor='#222'
        
        /> */}




        <div className="info">
          <h1>
            {/* <DecryptedText text="ASHAY_KUMAR" style={{ display: 'block' }} /> */}
            <div className="animatedText">
              <DecryptedText
                text="ASHAY_"
                maxIterations={50}
                animateOn="view"
                revealDirection="center"
              />
              <div >
                <DecryptedText
                  text="KUMAR"
                  maxIterations={100}
                  animateOn="view"
                  revealDirection="center"
                />
              </div>
            </div>
          </h1>
          <div className="skills">

            <p><FuzzyText
              baseIntensity={0.1}
              hoverIntensity={0.2}
              enableHover={true}
            >&gt;_ Java Spring-Boot Developer...</FuzzyText>
            </p>

            <p><FuzzyText
              baseIntensity={0.1}
              hoverIntensity={0.28}
              enableHover={true}
            >&gt;_ MERN Stack Developer...</FuzzyText>
            </p>
            <p><FuzzyText
              baseIntensity={0.1}
              hoverIntensity={0.2}
              enableHover={true}
            >&gt;_ SQL Developer...</FuzzyText>
            </p>
            <p><FuzzyText
              baseIntensity={0.1}
              hoverIntensity={0.35}
              enableHover={true}
            >&gt;_ UI/UX Designer...</FuzzyText>
            </p>
          </div>
          <p>Hi my name is <span className="terminal"><TextType
                            text={["{ Ashay Kumar }"]}
                            typingSpeed={70}
                            pauseDuration={5500}
                            showCursor={true}
                            cursorCharacter="_"
                        /></span>. I am a software Engineer, a true, definition of a tech addict. 
                        <br />
                        My goal is to craft seamless digital experiences that not only meet but exceed client expectations.</p>
          <div className='buttons'>
            <button className='btn1 contact-btn'>Contact Me<i class='bx bx-paper-plane' ></i></button>
            <button className='btn1 resume-btn'>Download Resume <i class='bx bx-chevrons-down'></i></button>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/in/ashay-kumar-830411221/" target="_blank" rel="noopener noreferrer">
              <i class='bx bxl-linkedin-square'></i>
            </a>
            <a href="https://github.com/ashaykr277" target="_blank" rel="noopener noreferrer">
              <i class='bx bxl-github' ></i>
            </a>

            <a href="mailto:ashaykr277@gmail.com?subject=Hello&body=I want to hire you">
              <i class='bx bx-envelope'></i>
            </a>
          </div>
        </div>
      </section>



    </>
  )
}

export default Section