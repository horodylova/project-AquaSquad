import { useNavigate } from "react-router-dom";

export const PublicRoute = ({ component: Component }) => {
  const navigate = useNavigate();

  const isUserSignedIn = false; 
  if (!isUserSignedIn) {
    navigate("/");
  }

  return <Component />;
};

export default PublicRoute;

