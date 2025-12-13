import React from 'react'

const Projbox = (props) => {
    return (
        <><div className='proj-container'>
            <div className="top"
                style={{
                    backgroundImage: `url(${props.src})`
                }}></div>

            <div className="down">
                <h4>{props.title}</h4>
                <p>{props.desc}</p>
                <div className='techs'>
                    <p>{props.tech1}</p>
                    <p>{props.tech2}</p>
                    <p>{props.tech3}</p>
                </div>
                <div className="btns">
                    <div className="btn2 code">
                        <a href="https://github.com/ashaykr277/Ai-Proctored-Major-Project" target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i> Code
                        </a>
                    </div>

                    <div className="btn2 Demo"><a href="" target="_blank" rel="noopener noreferrer">
                        <i class='bx bx-globe' ></i>Demo
                    </a>
                    </div>
                </div>
            </div>
        </div>


            <div className="edu-box">
                <div className="top">
                    <i class={props.icon} ></i>
                    <div className="institute">{props.skill}</div>
                </div>


                <div className="edu-details">
                    <div className="degree">{props.degree}</div>
                    <div className="branch">{props.branch}</div>
                    <div className="down">
                        <div className="year"><i class='bx bx-calendar' ></i>{props.yr1}-{props.yr2}</div>
                        <div className="loc"><i class='bx bx-map' ></i>{props.loc}</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Projbox