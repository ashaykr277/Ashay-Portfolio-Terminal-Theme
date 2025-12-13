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
                        <a href={props.href1} target="_blank" rel="noopener noreferrer">
                            <i className="bx bxl-github"></i> Code
                        </a>
                    </div>

                    <div className="btn2 Demo"><a href={props.href2} target="_blank" rel="noopener noreferrer">
                        <i class='bx bx-globe' ></i>Demo
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projbox