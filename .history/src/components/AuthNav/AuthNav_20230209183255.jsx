import { Link } from '../Ui/Link/Link.styled';
import { Wrapper } from 'components/AuthNav/AuthNav.styled';
import { MdAppRegistration } from 'react-icons/md';
export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">
        <MdAppRegistration />
        Register
      </Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};
