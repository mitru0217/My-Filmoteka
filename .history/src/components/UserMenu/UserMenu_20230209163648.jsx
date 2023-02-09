import { useDispatch } from 'react-redux';
import { logOut } from 'components/Redux/Auth/operationsAuth';
import { useAuth } from 'hooks/useAuth';
import Button from 'components/Ui/Button/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <h6>Welcome, {user.name}</h6>
      <Button size="small" type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </>
  );
};
