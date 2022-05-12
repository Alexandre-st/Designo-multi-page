import { useReducer } from 'react';

import { INPUT, RESET } from '../../constants/actionTypes';

const initialState = { value: '', isTouched: false };

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT:
      return { value: action.value, isTouched: state.isTouched };
    case RESET:
      return { value: '', isTouched: false };
    default:
      return initialState;
  }
};

const useInput = (verifyValue) => {
  const [inputState, dispatch] = useReducer(
    inputReducer,
    initialState
  );

  const isValid = verifyValue(inputState.value);
  const error = !isValid && inputState.isTouched;

  const handleChange = (evt) => {
    dispatch({ type: INPUT, value: evt.target.value });
  };

  const reset = () => {
    dispatch({ type: RESET });
  }

  return {
    value: inputState.value,
    isValid: isValid,
    error,
    handleChange,
    reset,
  }
};

export default useInput;
