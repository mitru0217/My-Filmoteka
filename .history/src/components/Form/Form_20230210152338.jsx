import { useState } from 'react';
import { FormStyle } from './Form.styled';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <FormStyle>
      <Input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="email"
      />
      <Input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
        placeholder="password"
      />
      <Button onClick={() => handleClick(email, pass)}>{title}</Button>
    </FormStyle>
  );
};

export { Form };
