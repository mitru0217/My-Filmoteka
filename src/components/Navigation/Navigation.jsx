import { useAuth } from 'hooks/useAuth';
import { Link } from 'components/Ui/Link/Link.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/library">Library</Link>}
    </nav>
  );
};
