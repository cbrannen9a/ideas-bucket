import React, { FC } from "react";
import {
  useAlertStateContext,
  useAlertDispatchContext,
} from "../../contexts/AlertContext";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { useInterval } from "../../hooks";
import { media, themeColourHelper } from "../../styles";

const Alert: FC = () => {
  const { state, isOpen, message } = useAlertStateContext();
  const dispatch = useAlertDispatchContext();

  useInterval({ callback: () => handleClose(), delay: 5200 });

  const handleClose = () => dispatch({ type: "CLOSE" });

  const alertAnimation = useSpring({
    from: { transform: "translate3d(0, 10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  return (
    <AlertContainer style={isOpen ? alertAnimation : {}}>
      <Message state={state} isOpen={isOpen}>
        {message}
      </Message>
      <CloseButton aria-label="close" onClick={handleClose}>
        CLOSE
      </CloseButton>
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

const Message = styled.div<{ state: string; isOpen: boolean }>`
  background: ${(props) =>
    themeColourHelper({ type: "alert", value: props.state }).bg};
  color: ${(props) =>
    themeColourHelper({ type: "alert", value: props.state }).fg};
  line-height: 4rem;
  padding: ${(props) => (props.isOpen ? "1rem" : 0)};
  overflow-wrap: anywhere;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;

  ${media.maxSmall} {
    font-size: 1em;
    margin: 0.25em;
    padding: 0.1em 0.25em;
  }
`;

export default Alert;
