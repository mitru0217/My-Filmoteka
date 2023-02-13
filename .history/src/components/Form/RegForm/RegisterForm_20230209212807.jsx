import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'components/';
import Input from 'components/Ui/Input/Input';
import Button from 'components/Ui/Button/Button';
import { RegForm } from './RegForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword(' ');
  };

  return (
    <RegForm>
      <RegForm onSubmit={handleSubmit}></RegForm>
      <h2>Registration</h2>
      <Input
        id="name"
        label="Username"
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        id="password"
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit">Signup</Button>
    </RegForm>
  );
};
