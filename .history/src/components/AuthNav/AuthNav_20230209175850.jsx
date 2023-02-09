import { Link } from '../Ui/Link/Link.styled';
import { Wrapper } from 'components/AuthNav/AuthNav.styled';
export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};
