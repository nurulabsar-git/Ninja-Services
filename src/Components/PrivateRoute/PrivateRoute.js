import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { ThemeContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(ThemeContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
      (loggedInUser.email || sessionStorage.getItem('token')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;