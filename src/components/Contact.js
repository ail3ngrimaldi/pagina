import React from 'react';
import '../styles/Contact.css';

export default function Contact () {
    return (     
<div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>Contact</span>
            <span>me</span>
          </div>
          <div class="app-contact">CONTACT INFO : +54 11 3432 3195</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}