import React from "react";
import styled from "styled-components";

const BurgerMenu: React.FC<Props> = ({ handleNavbar, navbarState }) => {
  return (
    <Wrapper onClick={handleNavbar}>
      <div className={navbarState ? "open" : ""}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
};

interface Props {
  navbarState: boolean;
  handleNavbar: () => void;
}

export default BurgerMenu;

const Wrapper = styled.div`
  border-radius: 50%;
  height: 3rem;
  position: relative;
  cursor: pointer;
  & span {
    top: 0.9rem;
    right: -0.5rem;
    border-radius: 9px;
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 2rem;
    height: 0.3rem;
    margin-bottom: 0.2rem;
    transition: all ease-in-out 0.2s;
  }
  .open span:nth-child(2) {
    opacity: 0;
  }
  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: 0.4rem;
    width: 2rem;
    right: -0.5rem;
  }
  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 1.4rem;
    width: 2rem;
    right: -0.5rem;
  }
`;
