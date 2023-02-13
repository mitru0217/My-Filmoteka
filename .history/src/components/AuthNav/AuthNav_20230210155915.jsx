import { LinkStyled } from '../UI/Link/Link.styled';
import { AuthNavStyle } from '../AuthNav/AuthNav.styled';
export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </AuthNavStyle>
  );
};
