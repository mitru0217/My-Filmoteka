import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <div>
      <Form />
      <p>
        Or <Link to="/register">register</Link>
      </p>
    </div>
  );
};

export default LogIn;
