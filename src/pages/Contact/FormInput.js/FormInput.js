import React from 'react';

const FormInput = (props) => {
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
    </div>
  );
}
 
export default FormInput;