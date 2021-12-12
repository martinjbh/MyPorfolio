import './DivMovement.css'
import React from 'react'

var qualities=["Html","Css","JavaScript","React","Illustrator"]
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
                <div className="movement-html">react</div>
                <div className="movement-html">Illustrator</div>
            </div>
        </div>

    )
}

export default DivMovement;