import React from "react";
import './Traductor.css';
import ingles from "../Traductor/ingles.png";
import español from "../Traductor/espanol.png";
import { useState } from "react";

const Traductor = (props) => {
    const [clase, setClase] = useState("ingles")

    const claseCambio = () => {


        
        if (clase == "ingles") {
            document.body.classList.add()

            return (
                setClase("español"),
                props.cambiarIdioma(true)
            )

        }
        else {
            document.body.classList.remove()
            setClase("ingles")
            props.cambiarIdioma(false)
        }
    }
    console.log(clase)
    return (
        <div className="t1" >
            <img src={ingles} className="t-icon1 " />
            <img src={español} className="t-icon1 espanol" />
            <button className={`grey-cirlce1 ${clase}`} onClick={claseCambio} ></button>
        </div>
    )
}
export default Traductor;
