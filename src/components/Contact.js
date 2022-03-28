import React from 'react';
import '../styles/Contact.css';

export default function Contact () {
    return (
        <div className='paragraph' id='Contact'>
            <div className='Contact_p'>
                <h2 className='Contact_h2'> Contact me</h2>
                <p>For any question, suggestion or if you are looking a person for a trainee/Jr. position, fell free to send me an e-mail. You can also send me a WhatsApp if you are in a hurry.</p>
            </div>
                <form>
                    <div className='col'>
                        <div className='form-group'>
                            <label>First Name</label>
                            <input type='text' />
                        </div>
                        <div>
                        <label>Last Name</label>
                            <input type='text' />
                        </div>
                    {/* <input className='Contact_long_placeholders' placeholder='Subject'></input>
                    <input className='Contact_long_placeholders' placeholder='Your message'></input> */}
                    </div>
                </form>
            <button className='ContactButton'>Send</button>
        </div>
    );
}