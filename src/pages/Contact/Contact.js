import React from 'react';

import useInput from '../../hooks/FormHook/FormHook';
import ButtonLocation from '../../components/ButtonLocation/ButtonLocation';
import FormInput from './FormInput.js/FormInput';

const nameFormat = /^[a-zA-Z,'.\-\s]+$/g;
const emailFormat = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
const numericFormat = /^[0-9\b]+$/;
const isValidName = (value) => value.match(nameFormat);
const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.match(emailFormat);
const isNumeric = (value) => value.match(numericFormat);

const Contact = () => {

  const { 
    value: nameValue,
    isValid: nameIsValid,
    error: nameError,
    handleChange: handleChangeName,
    reset: resetName
  } = useInput(isValidName);

  const {
    value: emailValue,
    isValid: emailIsValid,
    error: emailError,
    handleChange: handleChangeEmail,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    error: phoneError,
    handleChange: handleChangePhone,
    reset: resetPhone,
  } = useInput(isNotEmpty && isNumeric);

  const {
    value: messageValue,
    isValid: messageIsValid,
    errorr: messageError,
    handleChange: handleChangeMessage,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && phoneIsValid && messageIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Thank you for contacting us!');

    resetName();
    resetEmail();
    resetPhone();
    resetMessage();
  };
  

  return ( 
    <main className="main-contact">
      <section className="contact new-container">
        <div className="contact-text">
          <h1>Contact Us</h1>
          <p className="small-text">
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-container">
            <FormInput 
              type="name" 
              id="name"
              label="Name"
              name="name"
              value={nameValue}
              onChange={handleChangeName}  
            />
            { nameError && <p>Must be a valid Name</p>}
            <FormInput 
              type="email" 
              id="email"
              label="Email Adress"
              name="email"
              value={emailValue}
              onChange={handleChangeEmail}  
            />
            { emailError && <p>Must be a valid Email</p>}
            <FormInput 
              type="number" 
              id="number"
              label="Phone"
              name="number"
              value={phoneValue}
              onChange={handleChangePhone}  
            />
            { phoneError && <p>Must be a valid phone number</p>}
            <div className="form-area">
              <label>Your Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Your message"
                rows={5}
                value={messageValue}
                onChange={handleChangeMessage}
              />           
            { messageError && <p>Can't be empty</p>}
            </div>
          </div>
          
          <button className="button" type="submit" >
            Submit
          </button>
        </form>
      </section>

      <ButtonLocation />
    </main>
  );
}
 
export default Contact;