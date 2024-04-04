import { lazy, Suspense } from 'react';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader';
import { PrivateRoute } from '../src/Routes/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../src/Routes/PublicRoute/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LogInPage = lazy(() => import('../src/pages/LogInPage/LogInPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          {/* register */}
          <Route
            path="/register"
            element={
              <PublicRoute redirectRoute={'/home'} restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />

          {/* login */}
          <Route
            path="/login"
            element={
              <PublicRoute redirectRoute={'/home'} restricted>
                <LogInPage />
              </PublicRoute>
            }
          />

          {/* home */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </Layout>
  );
}

export default App;
