import React, { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mdvp08e', 'template_lvhwtup', form.current, 'W3Mw4d94Zy72PkO8K')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return(
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className='stroke-text'>READY TO </span>
                    <span>LEVEL UP</span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroke-text'> WITH US ?</span>
                </div>
            </div>
            <div className="right-j">
                
            </div>
        </div>
    )
}

export default Join 