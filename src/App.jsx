import { Route, Routes } from 'react-router-dom';
import Layout from '../src/components/Layout/Layout';

import { AppWrapper } from './App.styled';


function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
