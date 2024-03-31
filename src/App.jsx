import { lazy, Suspense } from 'react';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader';
import { PublicRoute } from '../src/Routes/PublicRoute/PublicRoute';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LogInPage = lazy(() => import('../src/pages/LogInPage/LogInPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Register */}
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          {/* Login */}
          <Route
            path="/login"
            element={
              <PublicRoute redirectRoute={'/home'} restricted>
                <LogInPage />
              </PublicRoute>
            }
          />
          {/* Home */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
