// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import { Header } from 'components/Header/Header';

// const SharedLayout = () => {
  
//     // const isLoggedIn = useSelector(selectUserToken); // const selectUserToken = state => state.auth.token;


//   return (
//     <>
//       {/* <Header  /> // isAuthenticated={isLoggedIn} */}
//       <Header />
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//     </>
  
//   );
    
// };

// export default SharedLayout;


import { Header } from '../Header/Header';  

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;

