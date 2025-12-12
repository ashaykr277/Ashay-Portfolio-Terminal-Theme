import React from 'react'
import '../About.css'
import './skill box/skill-box.css'
import SkillBox from './skill box/SkillBox'

const About = () => {
    return (
        <>
            <section className='about-section'>
                <i class='bx bxs-chevron-down bounce'></i>
                <h2 className="heading">About.txt</h2>
                <img src="./Ashay-transparent.png" alt="" />
                <p>I am a passionate software developer with a love for creating digital experience that matter. My journey in tech started with curiosity and has evolved into a commitment to building  softwares and solutions that bridges creativity and functionality.</p>
                <div className="skills-box">

                    <SkillBox skill="Frontend"
                        icon="bx bx-code-alt"
                        skl1="HTML" skl2="CSS" skl3="JavaScript" skl4="React.js"
                        desc="Building responsive and interactive user interfaces" />

                    <SkillBox skill="Backend"
                        icon="bx bx-code-curly"
                        skl1="Node.js" skl2="Express.js" skl3="Spring" skl4="Spring-boot"
                        desc="Scalable server side applications and APIs" />

                    <SkillBox skill="Database" icon="bx bx-data"
                        skl1="SQL" skl2="MySQL" skl3="Postgresql" skl4="MongoDB"
                        desc="Database Management using SQL and NoSQL" />

                    <SkillBox skill="Programming" icon="bx bx-code-block"
                        skl1="Java" skl2="Python" skl3="C/C++" skl4="JavaScript"

                        desc="Proficient in Data Structures and Algorithms" />

                    <SkillBox skill="Deployment" icon="bx bx-globe"
                        skl1="AWS" skl2="Git/GitHub" skl3="Docker" skl4="Vercel"
                        desc="Automated Deployment and cloud infrastructure" />

                    <SkillBox skill="UI/UX"
                        icon="bx bx-paint"
                        skl1="Adobe XD" skl2="Figma" skl3="Photoshop" skl4=""
                        desc="Automated Deployment and cloud infrastructure " />
                </div>
                <div className="status">
                    <div className="details">
                        <h3> &gt; CURRENT STATUS : <span>Available for Projects / Immediate joiner...</span></h3>
                        <p>Ready to collaborate on your next big idea</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About