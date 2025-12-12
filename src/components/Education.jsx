import '../About.css'
import './EduBox/Edubox.css'
import Edubox from './EduBox/Edubox'
import ScrollFloat from '../../ReactBits/ScrollFloat'

import CountUp from '../../ReactBits/CountUp'
import TextType from '../../ReactBits/TextType';



const Education = () => {
    return (
        <>
            <section className='about-section'>
                <i class='bx bxs-chevron-down'></i>
                <h2 className="heading">
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        Education.log
                    </ScrollFloat>
                </h2>
                <p>My Professional Journey through the tech industry, working with innovative companies and delivering impactful solutions.</p>

                <div className="skills-box">
                    <Edubox skill="National Institute of Science and Technology(NIST)"
                        icon="bx bxs-graduation"
                        degree="Bachelor of Technology"
                        branch="> : ~\Computer Science Engineering"
                        yr1="2021" yr2="2025"
                        loc="Brahmapur, Odisha" />

                    <Edubox skill="Sri Chaitanya Techno School"
                        icon="bx bxs-school"
                        degree="Intermediate"
                        branch="> : ~\Physics Chemistry Maths"
                        yr1="2018" yr2="2020"
                        loc="Visakhapatnam, Andhra Pradesh" />

                    <Edubox skill="B.D.M International School"
                        icon="bx bx-bus-school"

                        degree="Matriculation"
                        branch="> : ~\CBSE Board"
                        yr1="2017" yr2="2018"
                        loc="Kolkata, West Bengal" />
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
                            typingSpeed={90}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                        /></p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Education