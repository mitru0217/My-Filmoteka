import { useAuth } from 'hooks/useAuth';
import { Link } from 'components/Ui/Link/Link.styled';
import { AiOutlineHome } from 'react-icons/ai';
export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/">
        {' '}
        <AiOutlineHome />
        Home
      </Link>
      {isLoggedIn && <Link to="/library">Library</Link>}
    </nav>
  );
};
