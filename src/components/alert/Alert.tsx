import React, { useContext } from "react";
import { AlertContext } from "../../contexts/AlertContext";
import styled from "styled-components";
import { useSpring } from "react-spring";

const Alert: React.FC = () => {
  const { state } = useContext(AlertContext);

  const alertAnimation = useSpring({
    from: { transform: "translate3d(0, 10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  return (
    <Wrapper>
      <div style={state.isOpen ? alertAnimation : {}}>
        <AlertContainer>{state.message}</AlertContainer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  border: 1px solid red;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  font-size: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const AlertContainer = styled.div`
  max-width: 120rem;
  border: 1px solid blue;
  /* background: red; */
  display: flex;
  margin: auto;
  padding: 0 1.5rem;
  justify-content: space-between;
  height: 4rem;
`;

export default Alert;
