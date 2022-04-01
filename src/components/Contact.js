import '../styles/Contact.css';
import SocialNetworkButtons from './SocialNetwork';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useState } from 'react';

const SERVICE_ID = 'ACAVAMISERVICEID'
const TEMPLATE_ID = 'ACAVAMITEMPLATEID'
const USER_ID = 'ACAVAMIUSERID'

export default function Contact () {

  const [data, setData] = useState({
    name:'',
    email:'',
    message:''
  })

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [e.target.name]:e.target.value
    })

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) =>  { 
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message sent successfully! I will be in touch soon'
    })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text
      })
    });
    e.target.reset()
  };
  
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
          <div className="app-contact">
            <SocialNetworkButtons/>
          </div>
        </div>
        <div className="screen-body-item">
          <form className="app-form">
            <div className="app-form-group">
              <input 
              className="app-form-control" 
              placeholder="Name"
              name='name'
              required
              />
            </div>
            <div className="app-form-group">
              <input 
              className="app-form-control" 
              placeholder="email"
              name='email'
              required
              />
            </div>
            <div className="app-form-group message">
              <input 
              className="app-form-control" 
              placeholder="Your message"
              name='message'
              required
              />
            </div>
            <div className="app-form-group buttons">
              <button 
              className="app-form-button"
              onSubmit={handleOnSubmit}
              >Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
}