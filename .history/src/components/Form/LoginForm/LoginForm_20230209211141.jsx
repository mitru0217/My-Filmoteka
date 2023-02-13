import React, { useState } from 'react';

import { LogForm } from './LoginForm.styled';
import Input from 'components/Ui/Input/Input';
import Button from 'components/Ui/Button/Button';
import { MdEmail, MdPassword } from 'react-icons/md';

export const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    handleLogin(user);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <LogForm onSubmit={handleSubmit}>
      <h2>Log In</h2>
      <MdEmail />
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <MdPassword />
      <Input
        type="password"
        value={password}
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />

      <Button type="submit">Login</Button>
    </LogForm>
  );
};
