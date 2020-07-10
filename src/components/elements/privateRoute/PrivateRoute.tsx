import React, { FC, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { ROUTES } from "../../../constants/routes";

const PrivateRoute: FC<Props> = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

interface Props {
  path: string;
}

export default PrivateRoute;
