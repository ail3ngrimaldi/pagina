import React from 'react';
import '../styles/Contact.css';

export default function Contact () {
    return (     
<div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>Contact</span>
            <span>me</span>
          </div>
          <div className="app-contact">Acá iconos de redes sociales: +54 11 1111 1111</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Name"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="Email"/>
            </div>
            {/* <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div> */}
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="Your message"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}