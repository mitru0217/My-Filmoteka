import { useState } from 'react';
import { FormStyle } from './Form.styled';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <FormStyle>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </FormStyle>
  );
};

export { Form };
