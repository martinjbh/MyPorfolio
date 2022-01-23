import React from "react";
import './FrontTop.css';
import MyDate from "../MyDate/MyDate";
import DivMovement from "../DivMovement/DivMovement";


const FrontTop=(props)=>{
return(
<div > 
              <MyDate cls="mydate" español={props.español} ingles={props.ingles}/>
              <DivMovement cls="div-move"/>
              <div className="color-back2"></div>
              <div className="color-back"></div>
</div>
             

)
}

export default FrontTop;