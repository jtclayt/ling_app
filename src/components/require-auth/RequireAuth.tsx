import { FC, Fragment } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../helpers/authHelpers";

const RequireAuth: FC = ({ children }) => {
  const currentLocation = useLocation();
  return (isAuthenticated())
    ? <Fragment>
      { children }
    </Fragment>
    : <Navigate to="/auth" state={{from: currentLocation}} />;
}

export default RequireAuth;
