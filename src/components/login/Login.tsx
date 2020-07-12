import React, { FC, useCallback, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { requestLogin } from "../../firebase";
import { ROUTES } from "../../constants/routes";

const Login: FC = () => {
  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await requestLogin(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  }, []);

  const { user, initializing } = useContext(AuthContext);

  if (initializing) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Redirect to={ROUTES.HOME} />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
