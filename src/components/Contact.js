import '../styles/Contact.css';
import SocialNetworkButtons from './SocialNetwork';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import 'dotenv/config';

import{ init } from '@emailjs/browser';
const USER_ID = process.env.REACT_APP_USER_ID;
init(USER_ID);

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;

export default function Contact () {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then((result) => {
        console.log(result.text);
        Swal.fire ({
          icon: 'success',
          title: 'Thank you for your email, I`ll answer as soon as posible :)'
        })
    }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: 'I`ll try better next time :)',
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
          <form onSubmit={sendEmail} className="app-form">
            <div className="app-form-group">
              <input 
              className="app-form-control" 
              placeholder="Name"
              name='from_name'
              id='from_name'
              required minlength="2" maxlength="50"
              />
            </div>
            <div className="app-form-group">
              <input 
              className="app-form-control-requiredformailjs" 
              placeholder="Ailen"
              disabled
              name='to_name'
              id='to_name'
              />
            </div>
            <div className="app-form-group">
              <input 
              className="app-form-control" 
              placeholder="Email"
              name='reply_to'
              id='reply_to'
              required
              />
            </div>
            <div className="app-form-group">
              <input 
              className="app-form-control" 
              placeholder="Subject"
              name='subject'
              id='subject'
              minlength="2" maxlength="50"
              />
            </div>
            <div className="app-form-group message">
              <input 
              className="app-form-control" 
              placeholder="Your message"
              name='message'
              id='message'
              required minlength="10" maxlength="400"
              />
            </div>
            <div className="app-form-group buttons">
              <button 
              className="app-form-button"
              onSubmit={sendEmail}
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