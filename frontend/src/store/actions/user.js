import {
  UPDATE_USER_INPUT,
  SUBMIT_USER_INPUT
} from './actionTypes.js';

export const handleSubmit = (user) => {
  
  return {
    type: SUBMIT_USER_INPUT,
    payload: user
  };
}

export const handleChange = (inputField, inputValue) => {
  return {
    type: UPDATE_USER_INPUT,
    payload: {
      type: inputField,
      value: inputValue
    }
  };
};