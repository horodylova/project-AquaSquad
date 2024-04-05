import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFetchingCurrentUser } from '../src/redux/auth/authSelectors';
import { refreshUser } from '../src/redux/auth/authOperations';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader';
import { PrivateRoute } from '../src/Routes/PrivateRoute/PrivateRoute';
import { PublicRoute } from '../src/Routes/PublicRoute/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DeveloperTestPage } from './pages/DeveloperTestPage/DeveloperTestPage';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage')
);
const LogInPage = lazy(() => import('../src/pages/LogInPage/LogInPage'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectFetchingCurrentUser);

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !isFetchingCurrentUser && (
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
               {/* Developer Test Page */}
          <Route path="/developer-test" element={<DeveloperTestPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <ToastContainer />
        </Suspense>
      </Layout>
    )
  );
}

export default App;
