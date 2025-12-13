import '../About.css'
import './EduBox/Edubox.css'
import './ProjBox/Projbox.css'
import Edubox from './EduBox/Edubox'
import Projbox from './ProjBox/Projbox'
import ScrollFloat from '../../ReactBits/ScrollFloat'

import CountUp from '../../ReactBits/CountUp'
import TextType from '../../ReactBits/TextType';
const Projects = () => {
    return (
        <>
            <section className='about-section' id="projects-section">
                <i class='bx bxs-chevron-down'></i>
                <h2 className="heading">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        Projects.txt
                    </ScrollFloat>
                </h2>
                <p>A collection of projects showcasing different aspects of modern web development, from user interface to backend architecture.</p>

                <div className="skills-box">
                    <Projbox 
                        src="https://devnetlimited.com/wp-content/uploads/2024/01/Online-Proctored-Exam-Solution.png"
                        title="AI Proctored Examination System"
                        desc="it is an advanced online testing platform designed to ensure the integrity and fairness of remote examinations through real-time AI monitoring. with face recognition, object detection, to prevent cheating and maintain exam security without human invigilators."
                        tech1="Python"
                        tech2="OpenCV"
                        tech3="YOLO"
                        href1="https://github.com/ashaykr277/Ai-Proctored-Major-Project"
                        href2=""
                    />
                    <Projbox 
                        src="https://img.freepik.com/premium-vector/face-recognition-scanning-flat-style-illustration_275655-582.jpg?w=1060"
                        title="Face Recognition System"
                        desc="it is an AI-powered application designed to identify and verify individuals based on their facial features. It uses computer vision and deep learning techniques to accurately detect, recognize, and match faces from live camera feeds or stored images."
                        tech1="Python"
                        tech2="OpenCV"
                        tech3=""
                        href1="https://github.com/ashaykr277/Face-Recognition-System"
                        href2=""
                    />
                    <Projbox 
                        src="https://img.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page_74855-10590.jpg?t=st=1765655972~exp=1765659572~hmac=ec8d6e01b2e59c8f37408e3227be90dee7d3fba791e9840fa4fd4af400de08c1&w=1480"
                        title="Portfolio Website"
                        desc="it is is a responsive and interactive personal website built with React.js to showcase professional skills, and projects. Designed with modern UI/UX approach, serving as a digital identity for personal branding and career opportunities."
                        tech1="JavaScript"
                        tech2="CSS"
                        tech3="React.js"
                        href1="https://github.com/ashaykr277/Ashay-Portfolio-Terminal-Theme"
                        href2="https://ashay-portfolio-terminal.vercel.app/"
                    />
                    <Projbox 
                        src="https://img.freepik.com/premium-vector/diverse-group-professionals-engages-cohort-analysis-using-digital-tools-visuals-enhancing-teamwork-customizable-flat-illustration-cohort-analysis_585735-36569.jpg?w=1480"
                        title="Employee Management System"
                        desc="it is an advanced online testing platform designed to ensure the integrity and fairness of remote examinations through real-time AI monitoring. with face recognition, object detection, to prevent cheating and maintain exam security without human invigilators."
                        tech1="Java"
                        tech2="Postgresql"
                        tech3="Spring-boot"
                        href1=""
                        href2=""
                    />
                    
                    <Projbox 
                        // src="https://img.freepik.com/free-vector/flat-design-online-ticket-illustration_23-2151089479.jpg?t=st=1765656260~exp=1765659860~hmac=84dc1a829df106d1397ee931950b148c74d550f7727695c4fe62f128f908281e&w=740"
                        src="https://img.freepik.com/free-vector/tiny-man-buying-ticket-online-via-laptop-monitor-plane-baggage-flat-vector-illustration-travelling-digital-technology_74855-8621.jpg?t=st=1765656318~exp=1765659918~hmac=833455cb9f29048ee7be161527865b02387a129e09819d76a9db32f687b41d60&w=1480"
                        title="Flight Booking System"
                        desc="it is an advanced online testing platform designed to ensure the integrity and fairness of remote examinations through real-time AI monitoring. with face recognition, object detection, to prevent cheating and maintain exam security without human invigilators."
                        tech1="Java"
                        tech2="Postgresql"
                        tech3="Spring-boot"
                        href1=""
                        href2=""
                    />
                    
                    
                    
                </div>
                <div className="status">
                    <div className="details">

                        <h3> &gt; TOTAL EXPERIENCE : <span><CountUp
                            from={10}
                            to={0}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text"
                        /> Years : <CountUp
                                from={20}
                                to={6}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            /> Months</span></h3>
                        <p>:::---------------------------------------:::</p>

                        <p><TextType
                            text={["Continuously learning and evolving with technology...", "Hire me for awesome projects..", ""]}
                            typingSpeed={40}
                            pauseDuration={1500}
                            showCursor={false}
                            cursorCharacter="_"
                        /></p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projects