import '../styles/Contact.css';
import SocialNetworkButtons from './SocialNetwork';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import{ init } from '@emailjs/browser';
init("LQHT6R22i7hg7Ppqh");

export default function Contact () {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_portfolio', e.target, 'LQHT6R22i7hg7Ppqh')
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
              required
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
              required
              />
            </div>
            <div className="app-form-group message">
              <input 
              className="app-form-control" 
              placeholder="Your message"
              name='message'
              id='message'
              required
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