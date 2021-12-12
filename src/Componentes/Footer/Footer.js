import React from "react";
import './Footer.css'
import { useRef } from "react";
import emailjs from 'emailjs-com';


const Footer = () => {

    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_6blcnbk', 'template_f9yfp82', formRef.current, 'user_D1Qvev04zROsVfVA6TQQ7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return (
        <div className="footer">
            <ul className="list">
                <a className="list-email const-list" href=""></a>
                <a className="list-guithub const-list" href=""></a>
                <a className="list-linkedin const-list" href=""></a>

            </ul>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input className="footer-input" type="text" placeholder="name" name="user_name"></input>
                <input className="footer-input" type="text" placeholder="subjet" name="user-subjet"></input>
                <input className="footer-input" type="text" placeholder="email" name="user-email"></input>
                <textarea className="footer-textarea" rows="7" type="text" placeholder="mensaage" name="message"></textarea>
                <button className="footer-button" type="submit">Enviar</button>
            </form>








        </div>
    )
}
export default Footer;