import { LinkStyled } from '../UI/Link/Link.styled';

export const AuthNav = () => {
  return (
    <>
      <LinkStyled to="/register">Register</LinkStyled>
      <LinkStyled to="/login">Log In</LinkStyled>
    </>
  );
};
