import Container from '../../components/Container/Container';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <h1>Home page</h1>

        <button onClick={() => dispatch(logOut())} type="button">
          Logout
        </button>
      </Container>
    </>
  );
};

export default HomePage;
