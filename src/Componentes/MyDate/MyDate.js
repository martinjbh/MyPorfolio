import './MyDate.css'
import React from 'react'

const MyDate=(props)=>{
    return(
        <div className={`content ${props.cls}`}>
                {props.ingles &&
                <div>
                <p  className="content-hello">Hello, My name is</p>
                <h2 className="content-myname">Martin Barreiro</h2>
                </div>}
                {props.español &&
                <div>
                <p  className="content-hello">Hola, Mi nombre es</p>
                <h2 className="content-myname">Martin Barreiro</h2>
                </div>}
                
              </div>
    )
}

export default MyDate;