import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring";

import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { ROUTES } from "../../constants/routes";
import media from "../../styles/media";

const NavBar: React.FC = () => {
  const [navbarState, setNavBarState] = useState(false);

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  const handleNavbar = () => {
    setNavBarState(!navbarState);
  };

  return (
    <Wrapper>
      <StyledNavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks style={linkAnimation}>
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

const StyledNavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1rem;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
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

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 0.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  background-color: #f7f7f7;
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
