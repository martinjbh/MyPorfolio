import React from "react";
import './DarkLight.css';
import  Sun from "../DarkLight/img/sun.png";
import  moon from "../DarkLight/img/moon.png";
import { useState } from "react";





const DarkLight =(props)=>{
    const [clase,setClase]=useState("right")

    const claseCambio=()=>{
        if (clase=="right"){
            return(
                setClase("left")
            )
        }
        else{
            setClase("right")}


    }
    
       
        console.log (clase)
return(

    

<div className="t">
    <img src={Sun} className="t-icon "/>
    <img src={moon} className="t-icon"/>
    <button className={`grey-cirlce ${clase}`} onClick={claseCambio}></button>

  
</div>
)

}
export default DarkLight;
