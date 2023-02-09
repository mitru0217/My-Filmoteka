import { useAuth } from 'hooks/useAuth';
import { Link } from 'components/Ui/Link/Link.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        <HomeIcon />
        Home
      </Link>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
