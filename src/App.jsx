import { lazy , Suspense} from 'react';
import Layout from '../src/components/Layout/Layout';
import Loader from '../src/components/Loader/Loader';
import { PublicRoute } from '../src/Routes/PublicRoute/PublicRoute';

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));



function App() {
  return (
    <Suspense fallback={<Loader />}>
    <Layout>  
      <PublicRoute path="/" component={WelcomePage} />
    </Layout>
  </Suspense>
  );
}
export default App;
