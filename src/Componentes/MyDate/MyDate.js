import './MyDate.css'
import React from 'react'

const MyDate=(props)=>{
    return(
        <div className={`content ${props.cls}`}>
                <p  className="content-hello">Hello, My name is</p>
                <h2 className="content-myname">Martin Barreiro</h2>
              </div>
    )
}

export default MyDate;