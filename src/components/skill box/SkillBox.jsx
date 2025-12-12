import React from 'react'

const SkillBox = (props) => {
    return (
        <>
            <div className="box">
                <i class={props.icon} ></i>
                <div className="head">{props.skill}</div>
                <div className="skill-set">
                    <p>{props.skl1}</p>
                    <p>{props.skl2}</p>
                    <p>{props.skl3}</p>
                    <p>{props.skl4}</p>
                </div>
                <p>{props.desc}</p>
            </div>
        </>
    )
}

export default SkillBox