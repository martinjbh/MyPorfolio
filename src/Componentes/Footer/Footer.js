import React from "react";
import './Footer.css'
import { useRef } from "react";
import emailjs from 'emailjs-com';
import { useState } from "react";
import 'animate.css';


const Footer = () => {

    const [total, setTotal] = useState(false)

    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_gw0xtpm', 'template_f9yfp82', formRef.current, 'user_D1Qvev04zROsVfVA6TQQ7')
            .then((result) => {

                alert(result.text);
            }, (error) => {
                alert(error.text);
            });
        e.target.reset()
    }

    const aviso = () => {
        setTotal(true)
    }
    const closePopUp = () => {
        setTotal(false)
    }
    return (
        <div className="footer">
            <ul className="list">
                <a className="list-email const-list" href="mailto:barreiromartinj@gmail.com"></a>
                <a className="list-guithub const-list" href="https://github.com/martinjbh"></a>
                <a className="list-linkedin const-list" href="https://www.linkedin.com/in/mart%C3%ADn-barreiro-130025224/"></a>

            </ul>
            <div className="formu">
            <form   ref={formRef} onSubmit={handleSubmit}>
                <input className="footer-input" type="text" placeholder="    name" name="user_name"></input>
                <input className="footer-input" type="text" placeholder="    subjet" name="user-subjet"></input>
                <input className="footer-input" type="email" placeholder="    email" name="user-email"></input>
                <textarea className="footer-textarea" rows="7" type="text" placeholder="mensaage" name="message"></textarea>
                <button className="footer-button" type="submit" onClick={() => aviso()}>Enviar</button>

            </form>
            </div>
           

            {total && (

                <div className="popUp animate__animated animate__bounce ">
                    <button className="popUp-button " onClick={closePopUp}>
                    </button>
                    Su mensaje ha sido enviado correctamente
                </div>
            )}





        </div>
    )
}
export default Footer;