import React, { useRef } from 'react';
import { sendMessageForm } from '../api/message';

export function Contact() {
  const fullName = useRef(null); // null = init value
  const userEmail = useRef(null);
  const userMessage = useRef(null);

  function submit() {
    sendMessageForm(fullName.current.value, userEmail.current.value, userMessage.current.value);

    fullName.current.value = '';
    userEmail.current.value = '';
    userMessage.current.value = '';
  }

  return (
    <div id="contact">
      <div className="contact">
        <div className="contactText">
          <p>Contact me</p>
        </div>

        <div className="contactWrapper">
          <div className="nameForm">
            <label htmlFor="name">Full Name</label>
            <input className="contactForm" type="text" name="name" ref={fullName} required />
          </div>

          <div className="emailForm">
            <label htmlFor="email">Email Address</label>
            <input className="contactForm" type="text" name="email" ref={userEmail} required />
          </div>
          
          <div className="messageForm">
            <label htmlFor="message">Your Message</label>
            <textarea
              className="contactMessage"
              name="message"
              ref={userMessage}
              style={{ height: '200px' }}
              required
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
  );
}
