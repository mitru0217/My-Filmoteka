import { useState } from 'react';
import { MyForm } from 'components/Form/Form.styled';
import Input from 'components/Ui/Input/Input';
import Button from 'components/Ui/Button/Button';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <MyForm>
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
    </MyForm>
  );
};

export { Form };
