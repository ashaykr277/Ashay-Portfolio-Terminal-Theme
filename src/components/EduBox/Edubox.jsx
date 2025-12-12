import React from 'react'
const Edubox = (props) => {
    return (
        <>
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

export default Edubox