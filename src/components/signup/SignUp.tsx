import React, { useCallback } from "react";
import { useHistory } from "react-router";
import { requestSignUp } from "../../firebase";
import { ROUTES } from "../../constants/routes";

const SignUp = () => {
  const history = useHistory();
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password, firstName, lastName } = event.target.elements;
      try {
        await requestSignUp({
          email: email.value,
          password: password.value,
          lastName: lastName.value,
          firstName: firstName.value,
        });
        history.push(ROUTES.HOME);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
        </label>
        <label>
          Last Name
          <input name="lastName" type="text" placeholder="Last Name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" required />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </label>
        <label>
          Confirm Password
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
