import { useState } from 'react';
import { FormStyle } from './Form.styled';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';

const MyForm = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="password"
      />
      <Button onClick={() => handleClick(email, password)}>{title}</Button>
    </FormStyle>
  );
};

export { MyForm };
