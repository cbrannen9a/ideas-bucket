import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { ROUTES } from "../../constants/routes";
import media from "../../styles/media";

const NavBar: React.FC = () => {
  const [navbarState, setNavBarState] = useState(false);

  const handleNavbar = () => {
    setNavBarState(!navbarState);
  };

  return (
    <Wrapper>
      <StyledNavBar>
        <FlexContainer>
          <Brand />
          <NavLinks>
            <Link to={ROUTES.HOME}>Home</Link>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </NavLinks>
        </FlexContainer>
      </StyledNavBar>
      <BurgerWrapper>
        <BurgerMenu navbarState={navbarState} handleNavbar={handleNavbar} />
      </BurgerWrapper>
      {navbarState && (
        <CollapseMenu navbarState={navbarState} handleNavbar={handleNavbar} />
      )}
    </Wrapper>
  );
};

export default NavBar;

const Wrapper = styled.div`
  height: 4rem;
  ${media.maxSmall} {
    height: 0rem;
  }
`;

const StyledNavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.main.primary.bg};
  z-index: 1;
  font-size: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 1.5rem;
  justify-content: space-between;
  height: 4rem;
`;

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: ${(props) => props.theme.main.primary.fg};
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 0.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.main.secondary.fg};
      border-bottom: 1px solid ${(props) => props.theme.main.secondary.fg};
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  background-color: ${(props) => props.theme.main.secondary};
  height: 3rem;
  width: 3rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  z-index: 1;
  box-shadow: 0 1rem 3rem grey;
  text-align: center;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;
