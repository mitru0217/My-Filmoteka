import { LinkStyled } from '../UI/Link/Link.styled';
import { AuthNavStyle } from '../AuthNav/AuthNav.styled';
import { WrapperForIcons } from '../UI/CommonStyled/Common.styled';
import { MdAppRegistration, MdOutlineLogin } from 'react-icons/md';
export const AuthNav = () => {
  return (
    <AuthNavStyle>
      <WrapperForIcons>
        <LinkStyled to="/register">
          {' '}
          <MdAppRegistration /> <span>Register</span>
        </LinkStyled>
      </WrapperForIcons>
      <WrapperForIcons>
        <MdOutlineLogin />
        <LinkStyled to="/login">Log In</LinkStyled>
      </WrapperForIcons>
    </AuthNavStyle>
  );
};
