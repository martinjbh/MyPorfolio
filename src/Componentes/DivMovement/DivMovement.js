import './DivMovement.css'
import React from 'react'

var qualities=["Html","Css","JavaScript","React Js","Illustrator", "React Native"]
const DivMovement = (props) => {
    return (
        <div className={`movement ${props.cls}`}>
            
            <div className="movement-container">
            {/* {qualities.map=(i=>{
                return(<div className="movement-html">{i}</div>)
                

            })} */}
                <div className="movement-html">Html</div>
                <div className="movement-html">Css</div>
                <div className="movement-html">JavaScript</div>
                <div className="movement-html">React Js</div>
                <div className="movement-html">React Native</div>
                <div className="movement-html">Figma</div>
                
            </div>
        </div>

    )
}

export default DivMovement;