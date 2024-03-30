import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader';
import Modal from './components/AllModals/Modal';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Modal />
        <Routes>
          <Route path="/">
            <Route index element={<WelcomePage />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </Layout>
    </Suspense>
  );
}
export default App;
