import React from 'react';

import ErrorIcon from '../../../assets/contact/desktop/icon-error.svg';

const FormInput = (props) => {

  const errorImage = <img src={ErrorIcon} alt="Warning error" />;
  // console.log(props);!formIsValid

  return ( 
    <div className="form-input">
      <label>{props.label}</label>
      <input 
        type={props.type}
        id={props.id} 
        placeholder={props.label}
        value={props.value}
        onChange={props.onChange}
      />
    { props.text && <p className="error">{props.text} {errorImage}</p>}
    </div>
  );
}
 
export default FormInput;