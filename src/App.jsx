import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../src/components/Layout/Layout';

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));



function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={ <WelcomePage />} />
        </Route>
      </Routes>
   
  );
}
export default App;
