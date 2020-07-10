import React, { useEffect, useState, FC } from "react";
import { onAuthStateChange } from "../firebase/auth";

const initialState: AuthState = {
  user: null,
  initializing: true,
};

export const AuthContext = React.createContext<AuthState>(initialState);

export const AuthProvider: FC = ({ children }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setState);
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

type AuthState = {
  user: firebase.User | null;
  initializing: boolean;
};
