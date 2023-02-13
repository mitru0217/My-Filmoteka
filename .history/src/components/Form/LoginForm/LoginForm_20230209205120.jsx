import React, { useState } from 'react';

import { LogForm } from './LoginForm.styled';
import Input from 'components/Ui/Input/Input';
import Button from 'components/Ui/Button/Button';
import {MdEmail} from 'react-icons/md';
export const LoginForm = ({ handleLogin }) => {
  //   const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const handleClickShowPassword = () => setShowPassword(show => !show);

  //   const handleMouseDownPassword = event => {
  //     event.preventDefault();
  //   };
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
      <MdEmail/>
      <Input
      
        id="email"
        label="Email"
        type="email"
        value={email}
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />

      <Input
        id="password"
        // type={showPassword ? 'text' : 'password'}
        type="password"
        value={password}
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
        // endAdornment={
        //   <InputAdornment position="end">
        //     <IconButton
        //       sx={{ color: '#1976d2', mr: 1, my: 0.5 }}
        //       aria-label="toggle password visibility"
        //       onClick={handleClickShowPassword}
        //       onMouseDown={handleMouseDownPassword}
        //     >
        //       {showPassword ? <VisibilityOff /> : <Visibility />}
        //     </IconButton>
        //   </InputAdornment>
        // }
      />

      <Button type="submit">Signup</Button>
    </LogForm>
  );
};
