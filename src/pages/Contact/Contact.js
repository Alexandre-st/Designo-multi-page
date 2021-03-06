import React, { useState } from 'react';
import { useFormik } from 'formik';

import ButtonLocation from '../../components/ButtonLocation/ButtonLocation';
import { Modal } from "../../components/Modal/Modal";
import BackgroundImage from '../../assets/shared/desktop/bg-pattern-leaf.svg';
import ErrorImage from '../../assets/contact/desktop/icon-error.svg';

const Contact = () => {

  const ErrorIcon = <img src={ErrorImage} alt="Error" />;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validate : values => {
      const errors = {}; 
      if (!values.name) {
        errors.name = "Can't be empty";
      }
      if (!values.email) {
        errors.email = "Can't be empty";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Please use a valid email address';
      }
      if (!values.phone) {
        errors.phone = "Can't be empty";
      }
      if (!values.message) {
        errors.message = "Can't be empty";
      }
      return errors;
    }, 
    onSubmit: (values) => { 
      console.log("submit", values);
      openModal(); 
      formik.resetForm({ values : ''});
    }
  });

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
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
        <form className="form" onSubmit={formik.handleSubmit}>
        <div className="form-input">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name && <p className="error error-input">{formik.errors.name}{ErrorIcon}</p>}
        </div>
        <div className="form-input">
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="Email Adress" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email && <p className="error error-input">{formik.errors.email}{ErrorIcon}</p>}
        </div>
        <div className="form-input">
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="Phone"  {...formik.getFieldProps("phone")} />
          {formik.touched.phone && formik.errors.phone && <p className="error error-input">{formik.errors.phone} {ErrorIcon}</p>}
        </div>

        <div className="form-area">
          <label htmlFor="message">Your Message</label>
          <textarea
            type="text"
            placeholder="Your message"
            rows={5}
            {...formik.getFieldProps("message")}
          />           
          {formik.touched.message && formik.errors.message && <p className="error error-area">{formik.errors.message}{ErrorIcon}</p>}
          </div>
          
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </section>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
      {/* { console.log(showModal) } */}
      <ButtonLocation />
      <div className="background-image background-image-bottom">
          <img src={BackgroundImage} alt="Deco" />
        </div>
    </main>
  );
}
 
export default Contact;