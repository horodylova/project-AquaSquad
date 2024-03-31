import { lazy, Suspense } from 'react';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader';
import { PublicRoute } from '../src/Routes/PublicRoute/PublicRoute';

// import { Route, Routes } from 'react-router-dom';
// import { PublicRoute } from './PublicRoute';

// import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const RegistrationPage = lazy(() =>
//   import('./pages/RegistrationPage/RegistrationPage')
// );
// const LogInPage = lazy(() => import('../src/pages/LogInPage/LogInPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <PublicRoute path="/" component={WelcomePage} />
      </Layout>
      {/* here */}
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/login"
            element={
              <PublicRoute redirectRoute={'/'} restricted>
                <LogInPage />
              </PublicRoute>
            }
          />
        </Route>
      </Routes> */}
      {/* here */}
      {/* </Layout> */}
    </Suspense>
  );
}
export default App;
