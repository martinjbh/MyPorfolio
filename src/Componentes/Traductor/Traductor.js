import React from "react";
import './Traductor.css';
import ingles from "../Traductor/ingles.png";
import español from "../Traductor/espanol.png";
import { useState } from "react";

const Traductor = (props) => {
    const [clase, setClase] = useState("light")

    const claseCambio = () => {

        if (clase == "light") {
            document.body.classList.add("dark-mode")

            return (
                setClase("dark")
            )
        }
        else {
            document.body.classList.remove("dark-mode")
            setClase("light")
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
