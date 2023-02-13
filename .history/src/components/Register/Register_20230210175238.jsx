import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
      <Form />
      <p>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </div>
  );
};

export default Register;
