import { useState } from 'react';
import { MyForm, Wrapper, Title } from 'components/Form/Form.styled';
import Input from 'components/Ui/Input/Input';
import Button from 'components/Ui/Button/Button';
import { MdPassword, MdEmail } from 'react-icons/md';

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <MyForm>
      <Title>{title}</Title>
      <Wrapper style={{ fill: 'teal' }}>
        <MdEmail />
        <Input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
        />
      </Wrapper>
      <Wrapper>
        <MdPassword />
        <Input
          type="password"
          value={pass}
          onChange={e => setPass(e.target.value)}
          placeholder="password"
        />
      </Wrapper>

      <Button onClick={() => handleClick(email, pass)}>{title}</Button>
    </MyForm>
  );
};

export { Form };
