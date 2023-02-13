import { LinkStyled } from '../UI/Link/Link.styled';
import { AuthNavStyle } from '../AuthNav/AuthNav.styled';
import { MdAppRegistration } from 'react-icons/md';
export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <MdAppRegistration />
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </AuthNavStyle>
  );
};
