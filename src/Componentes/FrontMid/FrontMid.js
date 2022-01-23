import './FrontMid.css'
import React from 'react'
import { useState } from "react";



const FrontMid = (props) => {


    return (
        <div >
            <div className={props.cls} >
                <div className="back-img"></div>
                <div className="in-img"></div>

                {props.español && <div className="about-me">
                    <h1>Sobre mi</h1>
                    <p> Cosas sobre mi intereses, hobbies, tecnologias</p>

                </div>}
                {props.ingles && <div className="about-me">
                    <h1>About me</h1>
                    <p>
                        Things about my interests, hobbies, technologies
                    </p>

                </div>}
                
                <div className="back-img2"></div>
                <div className="in-img2"></div>

                {props.ingles && <div className="about-me2">
                    <h1>My Objectives</h1>
                    <p>
                        My goals are to develop myself as a programmer.
                    </p>
                </div>}
                {props.español && <div className="about-me2">
                    <h1>Mis Objetivos</h1>
                    <p>
                        Mis objetios son desarrollarme como programador.
                    </p>
                </div>}


            </div>
        </div>
    )
}
export default FrontMid;