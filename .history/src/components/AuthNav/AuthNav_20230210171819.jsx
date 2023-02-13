import { LinkStyled } from '../UI/Link/Link.styled';
import { AuthNavStyle, Wrapper } from '../AuthNav/AuthNav.styled';
import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';
export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <Wrapper>
        <MdAppRegistration />
        <LinkStyled to="/register">Register</LinkStyled>
      </Wrapper>
      <Wrapper>
        <MdOutlineLogin />
        <LinkStyled to="/login">Log In</LinkStyled>
      </Wrapper>
    </AuthNavStyle>
  );
};
