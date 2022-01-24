import './DivMovement.css'
import React from 'react'

var qualities = ["Html", "Css", "JavaScript", "React Js", "Illustrator", "React Native"]
const DivMovement = (props) => {
    return (
        <div className={`movement ${props.cls}`}>
            <div className="movement-container">
                {qualities.map((val) => {
                    return (
                        <div className="movement-html">{val}</div>)
                })}
            </div>
        </div>

    )
}
export default DivMovement;