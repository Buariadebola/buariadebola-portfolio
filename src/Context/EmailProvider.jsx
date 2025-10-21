import React, { createContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EmailContext = createContext();

const EmailProvider = ({children}) => {
  const form = useRef();
  const [error, setError] = useState('')

const sendEmail = (e) => {
  e.preventDefault();

  const serviceID = 'service_onvu4yg';
  const ownerTemplateID = 'template_7tyap87';
  const autoReplyTemplateID = 'template_hof4zya';
  const publicKey = 'j-m7dGYE7QO6UJQvm';

  // Send to site owner
  emailjs.sendForm(serviceID, ownerTemplateID, form.current, publicKey)
    .then((result) => {
      console.log('Notification sent to owner:', result.text);
    })
    .catch((error) => {
      setError(error);
    });

  // Send auto-reply to user
  emailjs.sendForm(serviceID, autoReplyTemplateID, form.current, publicKey)
    .then((result) => {
      console.log('Auto-reply sent to user:', result.text);
    })
    .catch((error) => {
      console.error('Failed to send auto-reply:', error);
    });
};



  return (
    <EmailContext.Provider value={{sendEmail, form, error}}>
        {children}
    </EmailContext.Provider>
  );
};

export { EmailProvider, EmailContext }
