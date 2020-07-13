import React, { FC } from "react";
import { useAlertDispatchContext } from "../../contexts/AlertContext";

const Landing: FC<Props> = () => {
  const dispatch = useAlertDispatchContext();
  return (
    <div>
      Landing
      <button onClick={() => dispatch({ type: "INFO", message: "Yo!" })}>
        INFO
      </button>
      <button onClick={() => dispatch({ type: "WARN", message: "oh!" })}>
        WARN
      </button>
      <button onClick={() => dispatch({ type: "ERROR", message: "arg!!!" })}>
        ERROR
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "SUCCESS",
            message:
              "SuperSuperSuperSuper SuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuperSuper SuperSuperSuper",
          })
        }
      >
        SUCCESS
      </button>
      <button onClick={() => dispatch({ type: "CLOSE" })}>Close</button>
    </div>
  );
};

interface Props {}

export default Landing;
