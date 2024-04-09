

import { Header } from '../Header/Header';
import { isAuthenticated } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const loginUser = useSelector(isAuthenticated);
  return (
    <>
      <Header isAuthenticated={loginUser} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
