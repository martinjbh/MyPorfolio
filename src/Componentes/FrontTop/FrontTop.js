import React from "react";
import './FrontTop.css';
import MyDate from "../MyDate/MyDate";
import DivMovement from "../DivMovement/DivMovement";


const FrontTop=()=>{
return(
<div > 
              <MyDate cls="mydate"/>
              <DivMovement cls="div-move"/>
              <div className="color-back2"></div>
              <div className="color-back"></div>
</div>
             

)
}

export default FrontTop;