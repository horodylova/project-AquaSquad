import { Route, Routes } from 'react-router-dom';
import { lazy , Suspense} from 'react';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader'

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));



function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={ <WelcomePage />} />
        </Route>
      </Routes>
      </Suspense>
  );
}
export default App;
