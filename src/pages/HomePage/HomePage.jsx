import Container from '../../components/Container/Container';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <h1>Home page</h1>
            <WaterRatioPanel />
        <button onClick={() => dispatch(logOut())} type="button">
          Logout
        </button>
      </Container>
    </>
  );
};

export default HomePage;