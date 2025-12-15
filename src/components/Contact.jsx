import React from 'react'
import '../About.css'
import './EduBox/Edubox.css'
import './ProjBox/Projbox.css'
import ScrollFloat from '../../ReactBits/ScrollFloat'
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
                        Contact.txt
                    </ScrollFloat>
                </h2>
                <p>I am here to help.
                    <br />
                    Chat to me 24/7 and get onboard in less than 5 minutes.
                </p>

                <div className="left">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName"/>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"/>

                    <label htmlFor="phNum">Phone Number</label>
                    <input type="text" />

                </div>
                <div className="right"></div>
        </section>
        </>
    )
}

export default Contact