import React from 'react';
import { MyInput } from './Input.styled';

const Input = ({ ...props }) => {
  return <MyInput {...props} />;
};

export default Input;
