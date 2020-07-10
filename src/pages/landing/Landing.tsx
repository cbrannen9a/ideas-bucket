import React, { useContext, FC } from "react";
import { AlertContext } from "../../contexts/AlertContext";

const Landing: FC<Props> = () => {
  const { dispatch } = useContext(AlertContext);
  return (
    <div>
      Landing
      <button onClick={() => dispatch({ type: "INFO", message: "Yo!" })}>
        INFO
      </button>
      <button onClick={() => dispatch({ type: "WARN", message: "oh!" })}>
        WARN
      </button>
      <button onClick={() => dispatch({ type: "CLOSE" })}>Close</button>
    </div>
  );
};

interface Props {}

export default Landing;
