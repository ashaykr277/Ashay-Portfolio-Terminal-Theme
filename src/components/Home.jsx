import React from 'react'
import 'boxicons'
const Home = () => {
  return (
    <>
      <section>
        <div className="section">
          
          <div className="info">
            <h1>Ashay Kumar</h1>
            <div className="skills">
            <p>&gt;_ Java Spring-Boot Developer</p>
            <p>&gt;_ MERN Stack Developer</p>
            <p>&gt;_ SQL Developer</p>
            <p>&gt;_ UI/UX Designer</p>

            </div>
            <p>Hi my name is <span>Ashay Kumar</span>. I am a software Engineer, a true, definition of a tech addict and optimism. I strive to bring innovation ideas to life. My goal is to craft seamless digital experiences that not only meet but exceed client expectations.</p>
            <div className='buttons'>
              <button className='btn1 contact-btn'>Contact Me<i class='bx bx-paper-plane' ></i></button>
              <button className='btn1 resume-btn'>Download Resume <i class='bx bx-chevrons-down'></i></button>
            </div>
            <div className="icons">
              <i class='bx bxl-linkedin-square'></i>
              <i class='bx bxl-github' ></i>
              <i class='bx bx-envelope' ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home