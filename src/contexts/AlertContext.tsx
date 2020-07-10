import React, {
  useReducer,
  FC,
  createContext,
  Dispatch,
  useContext,
} from "react";

type AlertActions =
  | { type: "INFO"; message: string }
  | { type: "WARN"; message: string }
  | { type: "ERROR"; message: string }
  | { type: "SUCCESS"; message: string }
  | { type: "CLOSE" };

type AlertStateContext = {
  isOpen: boolean;
  state: "INFO" | "WARN" | "ERROR" | "SUCCESS";
  message: string;
};

type AlertDispatchContext = Dispatch<AlertActions>;

const AlertStateContext = createContext<AlertStateContext | undefined>(
  undefined
);
const AlertDispatchContext = createContext<AlertDispatchContext | undefined>(
  undefined
);

const initialState: AlertStateContext = {
  isOpen: false,
  state: "INFO",
  message: "",
};

const AlertContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AlertStateContext.Provider value={state}>
      <AlertDispatchContext.Provider value={dispatch}>
        {children}
      </AlertDispatchContext.Provider>
    </AlertStateContext.Provider>
  );
};

const reducer = (
  state: AlertStateContext,
  action: AlertActions
): AlertStateContext => {
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

export function useAlertStateContext(): AlertStateContext {
  const context = useContext(AlertStateContext);
  if (context === undefined) {
    throw new Error(
      "useAlertStateContext must be rendered in a tree within a ContextReducer"
    );
  }
  return context;
}
export function useAlertDispatchContext(): AlertDispatchContext {
  const context = useContext(AlertDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useAlertDispatchContext must be rendered in a tree within a ContextReducer"
    );
  }
  return context;
}

export default AlertContextProvider;
