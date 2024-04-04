import Container from '../../components/Container/Container';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { WaterRatioPanel } from '../../components/HomePage/WaterRatioPanel/WaterRatioPanel';
import { Calendar } from '../../components/HomePage/Calendar/Calendar';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <h1>Home page</h1>
            <WaterRatioPanel />
            <Calendar/>
        <button onClick={() => dispatch(logOut())} type="button">
          Logout
        </button>
      </Container>
    </>
  );
};

export default HomePage;