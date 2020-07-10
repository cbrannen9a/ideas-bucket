import React, { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Alert: React.FC = () => {
  const { state } = useContext(AlertContext);

  const alertAnimation = useSpring({
    from: { transform: "translate3d(0, 10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  return (
    <AlertContainer style={state.isOpen ? alertAnimation : {}}>
      <Message>{state.message}</Message>
    </AlertContainer>
  );
};

const AlertContainer = styled(animated.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
`;

const Message = styled.div`
  line-height: 2rem;
`;

export default Alert;
