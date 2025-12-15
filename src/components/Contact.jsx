import '../About.css'
import './EduBox/Edubox.css'
import './ProjBox/Projbox.css'
import Edubox from './EduBox/Edubox'
import Projbox from './ProjBox/Projbox'
import ScrollFloat from '../../ReactBits/ScrollFloat'

import CountUp from '../../ReactBits/CountUp'
import TextType from '../../ReactBits/TextType';
const Contact = () => {
    return (
        <>
            <section className='about-section' id="contact-section">
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

            </section>

        </>
    )
}

export default Projects