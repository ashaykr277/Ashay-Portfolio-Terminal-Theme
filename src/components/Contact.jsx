import React from 'react'
import './Contact.css'
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

                <div className="contact-wrapper">
                    <div className="contact-card">
                        {/* Form Section */}
                        <div className="contact-form">
                            <div className="row">
                                <input type="text" placeholder="First name" />
                                <input type="text" placeholder="Last name" />
                            </div>


                            <input type="email" placeholder="you@company.com" />
                            <input type="tel" placeholder="+1 (555) 000-0000" />


                            <textarea placeholder="Leave us a message..." />


                            <label>Services</label>
                            <input type="text" placeholder="Select a service" />


                            <button>Send message</button>
                        </div>


                        {/* Info Section */}
                        <div className="contact-info">
                            <div className="info-block">
                                <h3>Chat with us</h3>
                            </div>


                            <div className="info-block">
                                <h3>Call us</h3>
                                <p>📞 +1 (555) 000-0000</p>
                                <span>Mon–Fri from 8am to 5pm</span>
                            </div>


                            <div className="info-block">
                                <h3>Visit us</h3>
                                <p>📍 100 Smith Street, Collingwood VIC 3066</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact