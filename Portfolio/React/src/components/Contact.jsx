import React, { useRef } from 'react';
import { sendMessageForm } from '../api/message';

export function Contact() {
  const fullName = useRef(null);
  const userEmail = useRef(null);
  const userMessage = useRef(null);

  function submit() {
    sendMessageForm(fullName.current.value, userEmail.current.value, userMessage.current.value);
    
    if (fullName.current.value === '' || userEmail.current.value === '' || userMessage.current.value === '') {
      alert("Fill in all fields!")
    }
    else {
      alert("The message was sent!");
    }

    fullName.current.value = '';
    userEmail.current.value = '';
    userMessage.current.value = '';
  }

  return (
    <div id="contact">
      <div className="contactContainer">
        <div className="contact">
          <div className="contactText">
            <p>Contact me</p>
          </div>

          <div className="contactWrapper">
            <div className="nameForm contactCentered">
              <label className="contactLabel" htmlFor="name">
                Full Name
              </label>
              <input className="contactForm" type="text" name="name" ref={fullName} />
            </div>

            <div className="emailForm contactCentered">
              <label className="contactLabel" htmlFor="email">
                Email Address
              </label>
              <input className="contactForm" type="text" name="email" ref={userEmail} />
            </div>

            <div className="messageForm contactCentered">
              <label className="contactLabel" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="contactMessage"
                name="message"
                ref={userMessage}
                style={{ height: '200px' }}
              />
            </div>

            <div className="contactButton">
              <button type="submit" onClick={submit}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
