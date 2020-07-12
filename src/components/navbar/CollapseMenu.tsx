import React from "react";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const CollapseMenu: React.FC<Props> = ({ navbarState, handleNavbar }) => {
  const { open } = useSpring({ open: navbarState ? 0 : 1 });
  return (
    <CollapseWrapper
      style={{
        transform: open
          .interpolate({
            range: [0, 0.2, 0.3, 1],
            output: [0, -20, 0, -200],
          })
          .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
      }}
    >
      <NavLinks>
        <li>
          <Link to={ROUTES.HOME} onClick={handleNavbar}>
            Home
          </Link>
        </li>
        <li>
          <Link to={ROUTES.LANDING} onClick={handleNavbar}>
            Landing
          </Link>
        </li>
      </NavLinks>
    </CollapseWrapper>
  );
};

interface Props {
  navbarState: boolean;
  handleNavbar: () => void;
}

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  position: absolute;
  background: ${(props) => props.theme.main.secondary};
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 4rem 1rem 1rem 2rem;

  & li {
    transition: all 600ms linear 0s;
  }
  & a {
    font-size: 1rem;
    line-height: 2;
    color: ${(props) => props.theme.main.secondaryText};
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.main.secondaryText};
      border-bottom: 1px solid ${(props) => props.theme.main.secondaryText};
    }
  }
`;
