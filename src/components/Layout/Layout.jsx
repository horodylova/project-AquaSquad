import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import WelcomePage from '../WelcomePage/WelcomePage';

const SharedLayout = () => {
  
    // const isLoggedIn = useSelector(selectUserToken); // const selectUserToken = state => state.auth.token;


  return (
    <>
      {/* <Header  /> // isAuthenticated={isLoggedIn} */}
      <Header />
      <WelcomePage />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  
  );
    
};

export default SharedLayout;
