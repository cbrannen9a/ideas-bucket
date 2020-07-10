import React, { useReducer, FC, createContext, Dispatch } from "react";

const initialState: AlertState = {
  isOpen: false,
  state: "INFO",
  message: "",
};

export const AlertContext = createContext<{
  state: AlertState;
  dispatch: Dispatch<AlertActions>;
}>({
  state: initialState,
  dispatch: () => {
    throw new Error("<AlertContextProvider /> missing from render tree");
  },
});

export const AlertContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

const reducer = (state: AlertState, action: AlertActions): AlertState => {
  switch (action.type) {
    case "INFO":
    case "WARN":
    case "ERROR":
    case "SUCCESS":
      return { isOpen: true, state: action.type, message: action.message };
    case "CLOSE":
      return initialState;
    default:
      return state;
  }
};

type AlertActions =
  | { type: "INFO"; message: string }
  | { type: "WARN"; message: string }
  | { type: "ERROR"; message: string }
  | { type: "SUCCESS"; message: string }
  | { type: "CLOSE" };

type AlertState = {
  isOpen: boolean;
  state: "INFO" | "WARN" | "ERROR" | "SUCCESS";
  message: string;
};
